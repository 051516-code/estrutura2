import { Injectable } from '@angular/core';
import { Company } from '../interfaces/company.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private storageKey = 'companies';

  constructor() {
    // Inicializa el almacenamiento si es necesario
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  // Obtener todas las empresas
  getAllCompanies(): Company[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  // Obtener una empresa por ID
  getCompanyById(id: string): Company | null {
    const companies = this.getAllCompanies();
    return companies.find(company => company.id === id) || null;
  }

  // Crear una nueva empresa
  createCompany(company: Company): void {
    const companies = this.getAllCompanies();
    company.id = this.generateUniqueId(); // Asignar un ID único
    companies.push(company);
    localStorage.setItem(this.storageKey, JSON.stringify(companies));
  }

  // Actualizar una empresa existente
  updateCompany(updatedCompany: Company): void {
    const companies = this.getAllCompanies();
    const index = companies.findIndex(company => company.id === updatedCompany.id);
    if (index !== -1) {
      companies[index] = updatedCompany;
      localStorage.setItem(this.storageKey, JSON.stringify(companies));
    }
  }

  // Eliminar una empresa
  deleteCompany(id: string): void {
    let companies = this.getAllCompanies();
    companies = companies.filter(company => company.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(companies));
  }

  // Método para generar un ID único
  private generateUniqueId(): string {
    return (Math.random() + 1).toString(36).substring(2); // Genera un ID único sencillo
  }
}
