import { OrdonnanceService } from '../../services/ordonnance.service';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-ordonnance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-ordonnance.component.html',
  styleUrls: ['./add-ordonnance.component.css'],
})
export class AddOrdonnanceComponent {
  @Input() popOutVisible = false;
  @Input() initialordonnanceData: any; // Data received from the first popout
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();
  constructor(private ordonnanceService : OrdonnanceService){};
  medications = [{ medicament: '', dose: '', duree: '' }];

  onAddMedicament() {
    this.medications.push({ medicament: '', dose: '', duree: '' });
  }

  onSave() {
    const combinedData = {
      consultationDate:this.initialordonnanceData.dateTime,
      nss:this.initialordonnanceData.dpi,
      medications: this.medications,
    };

    console.log('Combined data to save:', combinedData);
    this.popOutVisible = false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
    this.ordonnanceService.saveOrdonnance(combinedData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
    //this.resetForm();
  }

  resetForm() {
    this.medications = [];
   }

  onCancel() {
    this.popOutVisible = false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }
}
