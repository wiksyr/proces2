import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import { MessagePackService } from './messagepack.service';
import { ProduktSearch } from '../models/ProduktSearch';
import { encode } from '@msgpack/msgpack';
@Injectable({
    providedIn: 'root'
  })

export class ProduktyApiService {

  constructor(private msgPack: MessagePackService) {}
  
  async getForSearchbox(queryString: string): Promise<ProduktSearch[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    // Serialize the data using MessagePack
    const serializedData = encode(queryString);

    // Encode the serialized data in base64
    const base64Data = btoa(String.fromCharCode(...new Uint8Array(serializedData)));

    // URL encode the base64 data to ensure it can be safely included in a URL
    const encodedData = encodeURIComponent(base64Data);
    const response = await fetch(`${config.apiUrl}/api/Produkt/searchbox?searchQuery=${queryString}`, {
      headers: { 'Accept': 'application/x-msgpack' }
    }); 
    const arrayBuffer = await response.arrayBuffer();
    return this.msgPack.deserializeProduktSearchArray(arrayBuffer); 
  }
}