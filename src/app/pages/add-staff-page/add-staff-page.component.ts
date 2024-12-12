import { Component } from '@angular/core';
import { UpFormComponent } from "../../components/up-form/up-form.component";
import { PersonnelFormComponent } from "../../components/personnel-form/personnel-form.component";
import { AddDpiNavBarComponent } from '../../components/add-dpi-nav-bar/add-dpi-nav-bar.component';
@Component({
  selector: 'app-add-staff-page',
  imports: [AddDpiNavBarComponent,UpFormComponent, PersonnelFormComponent],
  standalone:true,
  templateUrl: './add-staff-page.component.html',
  styleUrl: './add-staff-page.component.css'
})
export class AddStaffPageComponent {

}
