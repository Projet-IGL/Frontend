import { Component } from '@angular/core';
import { AddDpiFormComponent } from '../../components/add-dpi-form/add-dpi-form.component';
import { AddDpiHeroComponent } from '../../components/add-dpi-hero/add-dpi-hero.component';
import { AddDpiNavBarComponent } from '../../components/add-dpi-nav-bar/add-dpi-nav-bar.component';
@Component({
  selector: 'app-add-dpi-page',
  imports: [AddDpiFormComponent, AddDpiNavBarComponent, AddDpiHeroComponent],
  templateUrl: './add-dpi-page.component.html',
  styleUrl: './add-dpi-page.component.css'
})
export class AddDpiPageComponent {

}
