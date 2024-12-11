import { Component } from '@angular/core';
import { UpFormComponent } from "../../components/up-form/up-form.component";
import { PersonnelFormComponent } from "../../components/personnel-form/personnel-form.component";

@Component({
  selector: 'app-add-staff-page',
  imports: [UpFormComponent, PersonnelFormComponent],
  templateUrl: './add-staff-page.component.html',
  styleUrl: './add-staff-page.component.css'
})
export class AddStaffPageComponent {

}
