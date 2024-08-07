import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company.interface';

@Component({
  selector: 'app-company-create-visual',
  templateUrl: './company-create-visual.page.html',
  styleUrls: ['./company-create-visual.page.scss'],
})
export class CompanyCreateVisualPage implements OnInit {

  selectedCard: string = '';
  selectedSplashScreen: string = '';
  selectedLandingPage: string = '';

  cards = ['Card1', 'Card2', 'Card3']; // Opciones de tarjetas
  splashScreens = ['Splash1', 'Splash2', 'Splash3']; // Opciones de splash screens
  landingPages = ['Template1', 'Template2', 'Template3']; // Opciones de plantillas de página de aterrizaje

  constructor(
    private companyService: CompanyService,
    private router: Router
  ) { }

  ngOnInit() { }

  finalizeCreation() {
    if (this.selectedCard && this.selectedSplashScreen && this.selectedLandingPage) {
      const companyId = localStorage.getItem('currentCompanyId');
      if (companyId) {
        const company = this.companyService.getCompanyById(companyId);
        if (company) {
          // Actualizar los detalles visuales de la empresa
          const updatedCompany: Company = {
            ...company,
            card: this.selectedCard,
            splashScreen: this.selectedSplashScreen,
            landingPage: this.selectedLandingPage
          };

          this.companyService.updateCompany(updatedCompany);
          console.warn('Empresa actualizada con éxito.');
          this.router.navigate(['/home']); // Redirigir a la lista de empresas
        } else {
          console.error('Empresa no encontrada.');
          alert('No se encontró la empresa.');
        }
      } else {
        console.error('ID de empresa no disponible.');
        alert('ID de empresa no disponible.');
      }
    } else {
      alert('Por favor, complete todas las selecciones.');
    }
  }
}
