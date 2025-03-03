import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { config } from '../config';
import { MessagePackService } from './messagepack.service';
import { JednostkaSkrocona } from '../models/JednostkaSkrocona';
import { Jednostka } from '../models/Jednostka';
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
    
  async getSkroconaById(id: string): Promise<JednostkaSkrocona> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/skrocona/szukaj?id=${id}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeJednostkaSkrocona(arrayBuffer); 
  }
  
  async getById(id: string): Promise<Jednostka> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/szukaj?id=${id}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeJednostka(arrayBuffer); 
  }

  async getDefault(): Promise<Jednostka[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();

    return this.msgPack.deserializeJednostkaArray(arrayBuffer); 
  }

  
  async getPages(pageSize: number, pageNumber: number): Promise<Jednostka[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/strony?pageSize=${pageSize}&pageNumber=${pageNumber}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();

    return this.msgPack.deserializeJednostkaArray(arrayBuffer); 
  }

}