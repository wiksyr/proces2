import Integer from "@zxing/library/esm/core/util/Integer";
import { IStrefaSearch } from "./IStrefaSearch";

export class StrefaSearch implements IStrefaSearch { 
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

    static fromJSON(json: any): StrefaSearch {
        return new StrefaSearch(
          json[0],
          json[1]
          );
        }
}