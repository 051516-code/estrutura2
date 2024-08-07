import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../interfaces/company.interface';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.page.html',
  styleUrls: ['./company-edit.page.scss'],
})
export class CompanyEditPage implements OnInit {
  company: Company = { id: '', name: '', category: '' };
  categories = ['Tecnología', 'Comercio', 'Servicios', 'Educación', 'Salud'];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.company = this.companyService.getCompanyById(id) || { id: '', name: '', category: '' };
    }
  }

  saveChanges() {
    if (this.company.id) {
      this.companyService.updateCompany(this.company);
      this.router.navigate(['/home']);
    } else {
      alert('ID de empresa no disponible.');
    }
  }
}
