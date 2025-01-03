import { Component } from '@angular/core';
import { UpFormComponent } from "../../components/up-form/up-form.component";
import { PersonnelFormComponent } from "../../components/personnel-form/personnel-form.component";
import { AddDpiNavBarComponent } from '../../components/add-dpi-nav-bar/add-dpi-nav-bar.component';

/**
 * The `AddStaffPageComponent` is a standalone Angular component that serves as the main page
 * for adding staff. It combines various sub-components such as navigation, 
 * a form for uploading files, and a personnel form.
 */
@Component({
  selector: 'app-add-staff-page',
  // Declares the components that are imported and used in this component
  imports: [AddDpiNavBarComponent, UpFormComponent, PersonnelFormComponent],
  standalone: true, // Indicates that this is a standalone component
  templateUrl: './add-staff-page.component.html', // Path to the HTML template
  styleUrl: './add-staff-page.component.css' // Path to the CSS file
})
export class AddStaffPageComponent {
  // This class currently does not contain any logic or properties.
  // It serves as the container for the imported components.
}

