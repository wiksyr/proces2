import Integer from "@zxing/library/esm/core/util/Integer";
import { IProduktSearch } from "./IProduktSearch";

export class ProduktSearch implements IProduktSearch { 
    id: number|null; 
    nazwa: string; 

    constructor(
        id: string, 
        nazwa: string, 
    )
    {
        this.id = id == null ? null : Integer.parseInt(id); 
        this.nazwa = nazwa;  
    }

    static fromJSON(json: any): ProduktSearch {
        return new ProduktSearch(
          json[0],
          json[1]
          );
        }
}