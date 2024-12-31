import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrdonnanceService } from '../../services/ordonnance.service';
import { ConsultationService } from '../../services/consultation.service';
@Component({
  selector: 'app-add-bilan',
  imports: [CommonModule],
  templateUrl: './add-bilan.component.html',
  styleUrl: './add-bilan.component.css'
})
export class AddBilanComponent {

  @Input() popOutVisible = false;
  @Input() initialordonnanceData: any; // Data received from the first popout

  constructor(private ordonnanceService : OrdonnanceService, private ConsultationService:ConsultationService){};
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();



  onSave() {
    this.ConsultationService.saveConsultation(this.initialordonnanceData).subscribe(
      (response) => {
        console.log('Data saved successfully:', response);
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
      this.popOutVisible=false;
      console.log(this.popOutVisible);
      this.popOutVisibilityChange.emit(this.popOutVisible);
    }
    
  

  onCancel() { 
    this.popOutVisible=false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }
}
