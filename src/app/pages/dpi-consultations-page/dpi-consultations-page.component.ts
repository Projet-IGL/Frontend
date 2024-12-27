import { Component } from '@angular/core';
import { DpiNavbarComponent } from "../../components/dpi-navbar/dpi-navbar.component";
import { EmptyNavbarComponent } from "../../components/empty-navbar/empty-navbar.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddOrdonnanceComponent } from '../../components/add-ordonnance/add-ordonnance.component';
import { AddBilanComponent } from '../../components/add-bilan/add-bilan.component';
import { AjouterConsultationComponent } from '../../components/ajouter-consultation/ajouter-consultation.component';
@Component({
  selector: 'app-dpi-consultations-page',
  imports: [DpiNavbarComponent, EmptyNavbarComponent,CommonModule,AjouterConsultationComponent,AddOrdonnanceComponent,AddBilanComponent],
  templateUrl: './dpi-consultations-page.component.html',
  styleUrl: './dpi-consultations-page.component.css'
})
export class DpiConsultationsPageComponent {
  constructor(private router: Router) {}
  popOutVisible = false;//bilan
  popOutVisible1 = false;//ordonnance
  popOutVisible2 = false;//consultation
  consultationData: any;
  updatePopOutVisibility(visible: boolean): void {
    this.popOutVisible = visible;
    console.log("visible",this.popOutVisible);
  }
  updatePopOutVisibility1(data:boolean): void {
    
    this.popOutVisible1 = data;
    console.log("visible1",this.popOutVisible1);

  }
  updatePopOutVisibility2(visible: boolean): void {
    this.popOutVisible2 = visible;
    console.log("visible2",this.popOutVisible2);
  
  }
  openOtherPopout(event:any): void {
    console.log('Received event in parent:', event);
    this.consultationData = event.consultationData;
  
    if (event.action === 'ordonnance') {
      this.popOutVisible1 = true; // Open AddOrdonnance popout
    }
  }
  
  goToMedecinPage(){
    this.router.navigate(['/Rech-dpi/Consultations/Medecin']);
  }
}
