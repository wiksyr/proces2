import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { config } from '../config';
import { JednostkaDto } from '../models/JednostkaDto';
import { MessagePackService } from './messagepack.service';
import { JednostkaSkrocona } from '../models/JednostkaSkrocona';
@Injectable({
    providedIn: 'root'
  })

export class JednostkiApiService {

  constructor(private httpClient: HttpClient, private msgPack: MessagePackService) {}
  
  async getSkrocona(pageSize: number, pageNumber: number): Promise<JednostkaSkrocona[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/skrocona/strony?pageSize=${pageSize}&pageNumber=${pageNumber}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeJednostkaSkroconaArray(arrayBuffer); 
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

    
  async getById(id: string): Promise<JednostkaSkrocona> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/${id}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeJednostkaSkrocona(arrayBuffer); 
  }

  getDefault(): Observable<JednostkaDto[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-msgpack', // or 'application/x-www-form-urlencoded'
      'Accept': 'application/x-msgpack'

    });
    return this.httpClient.get<JednostkaDto[]>(`${config.apiUrl}/api/Jednostka`, { headers })
      .pipe(catchError(this.handleError));
  }

  
  getPages(pageSize: number, pageNumber: number): Observable<JednostkaDto[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-msgpack', // or 'application/x-www-form-urlencoded'
      'Accept': 'application/x-msgpack'

    });
    return this.httpClient.get<JednostkaDto[]>(`${config.apiUrl}/api/Jednostka/strony?pageSize=${pageSize}&pageNumber=${pageNumber}`, { headers })
      .pipe(catchError(this.handleError));
  }

}