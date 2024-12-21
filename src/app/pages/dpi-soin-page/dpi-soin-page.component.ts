import { Component } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";

@Component({
  selector: 'app-dpi-soin-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent],
  templateUrl: './dpi-soin-page.component.html',
  styleUrl: './dpi-soin-page.component.css'
})
export class DpiSoinPageComponent {

}
