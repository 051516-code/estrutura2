import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from '../services/business.services';
import { Business } from '../interfaces/business.interface';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.page.html',
  styleUrls: ['./business-detail.page.scss'],
})
export class BusinessDetailPage implements OnInit {
  business: Business | undefined;

  constructor(
    private route: ActivatedRoute,
    private businessService: BusinessService
  ) { }

  ngOnInit() {
    this.loadBusiness();
  }

  loadBusiness() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = idStr ? +idStr : null; // Convertir a número si no es null

    if (id !== null) {
      this.businessService.getBusiness(id).subscribe(data => {
        this.business = data;
      });
    } else {
      // Manejo en caso de que id sea null
      console.error('Business ID is null');
    }
  }
}
