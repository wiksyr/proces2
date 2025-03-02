import { numberAttribute } from "@angular/core";
import { IJednostkaSkrocona } from "./IJednostkaSkrocona";

export class JednostkaSkrocona implements IJednostkaSkrocona { 
    jednostkaId: number; 
    poprzedniaJednostkaId: number; 
    produktNazwa: string; 
    strefaNazwa: string;

    constructor(
        jednostkaId: number, 
        poprzedniaJednostkaId: number, 
        produktNazwa: string,
        strefaNazwa: string,
    )
    {
        this.jednostkaId = jednostkaId; 
        this.poprzedniaJednostkaId = poprzedniaJednostkaId; 
        this.produktNazwa = produktNazwa; 
        this.strefaNazwa = strefaNazwa; 
    }

    static fromJSON(json: any): JednostkaSkrocona {
        return new JednostkaSkrocona(
          json[0],
          json[1],
          json[2], 
          json[3]
          );
        }
}