import { IRodzajProduktu } from "./IRodzajProduktu";

export class RodzajProduktu implements IRodzajProduktu { 
    id: string;
    nazwa: string;
    numer: string;
    
    constructor(
        id: string,
        nazwa: string,
        numer: string,
    ){
        this.id = id; 
        this.nazwa = nazwa; 
        this.numer = numer; 
    }


  static fromJSON(json: any): RodzajProduktu {
    return new RodzajProduktu(
      json[0],
      json[1],
      json[2]
      );
    }
}