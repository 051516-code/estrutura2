import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company.interface';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.page.html',
  styleUrls: ['./company-create.page.scss'],
})
export class CompanyCreatePage implements OnInit {
  companyName: string = '';
  category: string = '';

  categories: string[] = ['Tecnología', 'Comercio', 'Servicios', 'Educación', 'Salud']; // Ejemplos de categorías

  constructor(
    private router: Router,
    private companyService: CompanyService
  ) { }

  ngOnInit() { }

  // Método para navegar al siguiente paso
  navigateToNextStep() {
    if (this.companyName && this.category) {
      const newCompany: Company = {
        id: '', // El ID se generará en el servicio
        name: this.companyName,
        category: this.category
      };

      // Crear la empresa y obtener el ID
      const companyId = this.companyService.createCompany(newCompany);
      localStorage.setItem('currentCompanyId', companyId); // Guardar el ID en localStorage

      // Navegar al siguiente paso
      this.router.navigate(['/aio/company/create-visual']);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
