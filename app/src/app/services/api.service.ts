import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyModel } from '../interfaces/family-model';
import { LocationModel } from '../interfaces/location-model';
import { ProductModel } from '../interfaces/product-model';
import { TokenModel } from '../interfaces/token-model';
import { TransactionModel } from '../interfaces/transaction-model';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { ErrorModalComponent } from '../components/error-modal/error-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private link: string = 'http://localhost:8000/';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  signIn$(email: string, password: string): Promise<AxiosResponse<TokenModel> | AxiosError> {
    return axios.post(
      `${this.link}auth/login`,
      {
        "email": email,
        "password": password,
      }
    ).catch(err => {
      this.dialog.open(ErrorModalComponent, {
        height: '100px',
        width: '300px',
        data: err,
      });

      return err;
    });
  }

  getProducts$(token: string): Observable<ProductModel[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer " + token);

    return this.http.get<ProductModel[]>(`${this.link}products`, {headers});
  }

  getLocations$(token: string): Observable<LocationModel[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer " + token);

    return this.http.get<LocationModel[]>(`${this.link}locations`, {headers});
  }

  getFailies$(token: string): Observable<FamilyModel[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer " + token);

    return this.http.get<FamilyModel[]>(`${this.link}families`, {headers});
  }

  getTransactions$(token: string): Observable<TransactionModel[]> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set("Authorization", "Bearer " + token);

    return this.http.get<TransactionModel[]>(`${this.link}transactions`, {headers});
  }
}
