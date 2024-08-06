// src/app/business-section/services/business.service.ts

import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Business } from '../interfaces/business.interface';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  private businesses: Business[] = [
    { id: 1, name: 'Business 1', description: 'Description for Business 1' },
    { id: 2, name: 'Business 2', description: 'Description for Business 2' },
    { id: 3, name: 'Business 3', description: 'Description for Business 3' }
  ];

  private idCounter = 4;

  constructor() { }

  getBusinesses(): Observable<Business[]> {
    return of(this.businesses).pipe(delay(500)); // Simular retraso
  }

  getBusiness(id: number): Observable<Business | undefined> {
    const business = this.businesses.find(b => b.id === id);
    return of(business).pipe(delay(500)); // Simular retraso
  }

  createBusiness(business: Business): Observable<Business> {
    const newBusiness = { ...business, id: this.idCounter++ };
    this.businesses.push(newBusiness);
    return of(newBusiness).pipe(delay(500)); // Simular retraso
  }

  updateBusiness(id: number, business: Business): Observable<void> {
    const index = this.businesses.findIndex(b => b.id === id);
    if (index !== -1) {
      this.businesses[index] = { ...business, id };
      return of(undefined).pipe(delay(500)); // Simular retraso, sin retorno de valor
    }
    return of(undefined).pipe(delay(500)); // Simular retraso si no se encuentra
  }

  deleteBusiness(id: number): Observable<void> {
    this.businesses = this.businesses.filter(b => b.id !== id);
    return of(undefined).pipe(delay(500)); // Simular retraso, sin retorno de valor
  }
}
