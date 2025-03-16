import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { MessagePackService } from './messagepack.service';
import { ProduktSearch } from '../models/ProduktSearch';
@Injectable({
    providedIn: 'root'
  })

export class ProduktyApiService {

  constructor(private msgPack: MessagePackService) {}
  
  async getForSearchbox(queryString: string): Promise<ProduktSearch[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Produkt/searchbox?queryString=${queryString}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeProduktSearchArray(arrayBuffer); 
  }
}