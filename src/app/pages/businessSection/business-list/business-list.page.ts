import { Component, OnInit } from '@angular/core';
import { Business } from '../interfaces/business.interface';
import { BusinessService } from '../services/business.services';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.page.html',
  styleUrls: ['./business-list.page.scss'],
})
export class BusinessListPage implements OnInit {
  business : Business[] = [];

  constructor(
    private businessServices: BusinessService
  ) { }

  ngOnInit() {
    this.loadBusinesses();
  }

  loadBusinesses(){
    this.businessServices.getBusinesses().subscribe( data =>{
      this.business =data;
    })
  }

}
