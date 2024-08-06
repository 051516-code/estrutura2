import { Component, OnInit } from '@angular/core';
import { Business } from '../interfaces/business.interface';
import { BusinessService } from '../services/business.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-create',
  templateUrl: './business-create.page.html',
  styleUrls: ['./business-create.page.scss'],
})
export class BusinessCreatePage implements OnInit {
  business: Partial<Business> = {};

  constructor(
    private businessService: BusinessService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createBusiness() {
    if (this.business.name && this.business.description) {
      this.businessService.createBusiness(this.business as Business).subscribe(() => {
        this.router.navigate(['/tabs/business/list']); // Redirige a la lista de negocios después de la creación
      });
    } else {
      // Manejo de errores si los campos son incompletos
      console.error('Please fill out all fields');
    }
  }
}
