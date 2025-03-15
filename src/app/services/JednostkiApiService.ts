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
  
  async getSkroconaByDate(start: Date, end: Date, pageSize: number, pageNumber: number): Promise<JednostkaSkrocona[]> {
    const headers = new HttpHeaders({
      'Accept': 'application/x-msgpack'
    });
    const response = await fetch(`${config.apiUrl}/api/Jednostka/skrocona/byDateStrony?start=${start.toLocaleDateString('en-CA')}&end=${end.toLocaleDateString('en-CA')}&pageSize=${pageSize}&pageNumber=${pageNumber}`, {
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

  async updateJednosta(jednostka: Jednostka) {
    // Data to send in POST request

    // Serialize the data to MessagePack format
    const serializedData = this.msgPack.serialize(jednostka);

    console.log(serializedData); 

    try {
      // Make the POST request using fetch API
      const response = await fetch(`${config.apiUrl}/api/Jednostka`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/octet-stream', // MessagePack content type
          'Accept': 'application/x-msgpack' 
        },
        body: serializedData, // Attach the serialized MessagePack data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the response and deserialize it (assuming it’s also MessagePack)
      const responseData = await response.arrayBuffer();
      const deserializedData = this.msgPack.deserialize(responseData);

      console.log('Response Data:', deserializedData);
    } catch (error) {
      console.error('Error:', error);
    }
  }

}