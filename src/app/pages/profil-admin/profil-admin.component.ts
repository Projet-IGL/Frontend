import { Component } from '@angular/core';
import { UpFormComponent } from "../../components/up-form/up-form.component";
import { AddDpiNavBarComponent } from '../../components/add-dpi-nav-bar/add-dpi-nav-bar.component';
import {ProfilStaffComponent} from '../../components/profil-staff/profil-staff.component';


@Component({
  selector: 'app-profil-admin',
  imports: [AddDpiNavBarComponent,UpFormComponent, ProfilStaffComponent],
  standalone:true,
  templateUrl: './profil-admin.component.html',
  styleUrl: './profil-admin.component.css'
})
export class ProfilAdminComponent {

}
