import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { config } from '../config';
import { MessagePackService } from './messagepack.service';
import { RodzajProduktu } from '../models/RodzajProduktu';
@Injectable({
    providedIn: 'root'
  })

export class ProductTypeApiService {

  constructor(private httpClient: HttpClient, private msgPack: MessagePackService) {}

  //private apiUrl: string = 'http://localhost:1080'; // Replace with your actual API endpoint
  
    async getProductType(): Promise<RodzajProduktu[]> {
      const headers = new HttpHeaders({
        'Accept': 'application/x-msgpack'
      });
      const response = await fetch(`${config.apiUrl}/ProductType`, {
        headers: { 'Accept': 'application/x-msgpack' }
      }); 
      const arrayBuffer = await response.arrayBuffer();
      return this.msgPack.deserializeRodzajProduktuArray(arrayBuffer); 
  }

  // Error handling for HTTP requests
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend error
      errorMessage = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}