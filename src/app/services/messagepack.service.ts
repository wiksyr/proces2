import { Injectable } from '@angular/core';
import { encode, decode } from '@msgpack/msgpack';
import { RodzajProduktu } from '../models/RodzajProduktu';
import { JednostkaSkrocona } from '../models/JednostkaSkrocona';
import { Jednostka } from '../models/Jednostka';
import { ProduktSearch } from '../models/ProduktSearch';
import { StrefaSearch } from '../models/StrefaSearch';

@Injectable({
  providedIn: 'root'
})
export class MessagePackService {

  // Serialize (Convert object to MessagePack)
  serialize(data: any): Uint8Array {
    return encode(data);
  }

  // Deserialize (Convert MessagePack to object)
  deserialize(data: ArrayBuffer): any {
    return decode(new Uint8Array(data));
  }

  deserializeRodzajProduktu(data: ArrayBuffer): RodzajProduktu {
    const jsonData = decode(new Uint8Array(data)); // Convert binary to JSON
    return RodzajProduktu.fromJSON(jsonData); // Convert JSON to a TypeScript class instance
  }

  // Deserialize MessagePack binary data into an array of LargeData objects
  deserializeRodzajProduktuArray(data: ArrayBuffer): RodzajProduktu[] {
    const jsonArray = decode(new Uint8Array(data)) as any[]; // Convert to JSON array
    return jsonArray.map(json => RodzajProduktu.fromJSON(json));  // Convert JSON to class instances
  }
  
  deserializeJednostkaSkrocona(data: ArrayBuffer): JednostkaSkrocona {
    const jsonData = decode(new Uint8Array(data)); // Convert binary to JSON
    return JednostkaSkrocona.fromJSON(jsonData); // Convert JSON to a TypeScript class instance
  }

  // Deserialize MessagePack binary data into an array of LargeData objects
  deserializeJednostkaSkroconaArray(data: ArrayBuffer): JednostkaSkrocona[] {
    const jsonArray = decode(new Uint8Array(data)) as any[]; // Convert to JSON array
    return jsonArray.map(json => JednostkaSkrocona.fromJSON(json));  // Convert JSON to class instances
  }
  
  deserializeJednostka(data: ArrayBuffer): Jednostka {
    const jsonData = decode(new Uint8Array(data)); // Convert binary to JSON
    return Jednostka.fromJSON(jsonData); // Convert JSON to a TypeScript class instance
  }

  // Deserialize MessagePack binary data into an array of LargeData objects
  deserializeJednostkaArray(data: ArrayBuffer): Jednostka[] {
    const jsonArray = decode(new Uint8Array(data)) as any[]; // Convert to JSON array
    return jsonArray.map(json => Jednostka.fromJSON(json));  // Convert JSON to class instances
  }
  
  // Deserialize MessagePack binary data into an array of LargeData objects
  deserializeProduktSearchArray(data: ArrayBuffer): ProduktSearch[] {
    const jsonArray = decode(new Uint8Array(data)) as any[]; // Convert to JSON array
    return jsonArray.map(json => ProduktSearch.fromJSON(json));  // Convert JSON to class instances
  }
  
  // Deserialize MessagePack binary data into an array of LargeData objects
  deserializeStrefaSearchArray(data: ArrayBuffer): StrefaSearch[] {
    const jsonArray = decode(new Uint8Array(data)) as any[]; // Convert to JSON array
    return jsonArray.map(json => StrefaSearch.fromJSON(json));  // Convert JSON to class instances
  }
}
