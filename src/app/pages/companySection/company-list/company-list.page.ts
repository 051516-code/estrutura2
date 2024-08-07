import { Component, OnInit } from '@angular/core';
import { Company } from '../interfaces/company.interface';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.page.html',
  styleUrls: ['./company-list.page.scss'],
})
export class CompanyListPage implements OnInit {
companies: Company[] = [];

  constructor(
    private companyService : CompanyService,
    private router :  Router

  ) { }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies(){
    this.companies = this.companyService.getAllCompanies();
  }

  viewCompanyDetails(id: string) {
    console.log(' id obtenido' , id)
    this.router.navigate([`/aio/company/company-view/${id}`]);
  }

  navigateToCreateCompany() {
    this.router.navigate(['/aio/company/intro']); // Asegúrate de que esta ruta esté configurada en tu enrutador
  }
}
