import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-intro',
  templateUrl: './company-intro.page.html',
  styleUrls: ['./company-intro.page.scss'],
})
export class CompanyIntroPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

    // Método para navegar al siguiente paso
    navigateToCreateCompany() {
      this.router.navigate(['/aio/company/create']);
    }
}
