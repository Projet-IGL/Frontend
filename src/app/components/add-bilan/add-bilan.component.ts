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


  onSave() {
      this.popOutVisible=false;
      console.log(this.popOutVisible);
      this.popOutVisibilityChange.emit(this.popOutVisible);
    }
    
  

  onCancel() { 
    this.popOutVisible=false;
    this.popOutVisibilityChange.emit(this.popOutVisible);
  }
}
