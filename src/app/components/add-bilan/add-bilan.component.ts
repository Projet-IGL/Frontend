import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-bilan',
  imports: [CommonModule],
  templateUrl: './add-bilan.component.html',
  styleUrl: './add-bilan.component.css'
})
export class AddBilanComponent {

  @Input() popOutVisible = false;
  @Output() popOutVisibilityChange = new EventEmitter<boolean>();

  selectedTests: string[] = [];

  onCheckboxChange(event: Event, testName: string) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedTests.push(testName);
    } else {
      this.selectedTests = this.selectedTests.filter((test) => test !== testName);
    }
  }

  onSave() {
    if(this.selectedTests.length==0){
      alert("Veuillez selectionner un bilan au moins!")
    }
    else{
      console.log('Selected Tests:', this.selectedTests);
      this.popOutVisible=false;
      console.log(this.popOutVisible);
      this.popOutVisibilityChange.emit(this.popOutVisible);
    }
    
  }

  onCancel() {
    this.selectedTests = []; 
    this.popOutVisible=false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }
}
