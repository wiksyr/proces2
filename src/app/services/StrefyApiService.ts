import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { MessagePackService } from './messagepack.service';
import { StrefaSearch } from '../models/StrefaSearch';
@Injectable({
    providedIn: 'root'
  })

export class StrefyApiService {

  constructor(private msgPack: MessagePackService) {}
  
  async getForSearchbox(): Promise<StrefaSearch[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Strefa/searchbox`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeStrefaSearchArray(arrayBuffer); 
  }
}