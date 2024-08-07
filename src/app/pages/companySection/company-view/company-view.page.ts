import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from '../interfaces/company.interface';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.page.html',
  styleUrls: ['./company-view.page.scss'],
})
export class CompanyViewPage implements OnInit {
  company: Company | null = null;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener el ID de la empresa desde la ruta
    this.route.paramMap.subscribe(params => {
      const companyId = params.get('id');
      if (companyId) {
        this.company = this.companyService.getCompanyById(companyId);
      }
    });
  }

  editCompany() {
    if (this.company) {
      this.router.navigate([`/aio/company/company-edit/${this.company.id}`]);
    } else {
      alert('No se pudo obtener la empresa para editar.');
    }
  }

  deleteCompany() {
    if (this.company && confirm('¿Estás seguro de que deseas eliminar esta empresa?')) {
      this.companyService.deleteCompany(this.company.id);
      this.router.navigate(['/home']);
    } else {
      alert('No se pudo obtener la empresa para eliminar.');
    }
  }
}
