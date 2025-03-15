import { IJednostka } from "./IJednostka";

export class Jednostka implements IJednostka {
    jednostkaId: number; 
    poprzedniaJednostkaId: number; 
    produktNazwa: string; 
    strefaNazwa: string;
    numer: number;
    anulowana: boolean;
    procesSterId: number;
    procesDezWstId: number;
    zakonczona: boolean;
    dataUtworzenia: Date;
    cito: boolean;
    zdarzenieId: string;
    przyjecieId: Date;
    wydanieId: Date;
    wersjaNaklejki: number;
    koszt: string;
    terminWaznosci: Date;
    kosztRzeczywisty: string;
    dataAnulowania: Date;
    anulowal: string;
    sztukiProd: number;
    zrodloCenyJednostki: number;
    tagiZmiany: string;
    zweryfikowanaPrzyPrzyjmowaniu: boolean;
    zweryfikowanaPrzyPakowaniu: boolean;
    zrealizowaneJednostkiId: Date;
    numerZbiorczy: string;
    dataModyfikacji: Date;
    historiaJednostkiId: Date;
    wydanieNaStrefieID: number;
    znaczniki: string;
    nrObiegu: number; 
    liczbaUzyc: number;
    dataZapakowania: Date;
    zapakowalId: string;
    wydaniePrzezKlientaId: Date;
    przyjeciePrzezKlientaId: Date;
    etykietaZbiorczaId: number;
    procesId: number;
    reklamacjaId: Date; 
    terminWaznosciDni: number;
    saUwagi: boolean;
    saKomentarze: number;

    constructor(
        jednostkaId: number, 
        poprzedniaJednostkaId: number, 
        produktNazwa: string, 
        strefaNazwa: string,
        numer: string,
        anulowana: string,
        procesSterId: string,
        procesDezWstId: string,
        zakonczona: string,
        dataUtworzenia: string,
        cito: string,
        zdarzenieId: string,
        przyjecieId: string,
        wydanieId: string,
        wersjaNaklejki: string,
        koszt: string,
        terminWaznosci: string,
        kosztRzeczywisty: string,
        dataAnulowania: string,
        anulowal: string,
        sztukiProd: string,
        zrodloCenyJednostki: string,
        tagiZmiany: string,
        zweryfikowanaPrzyPrzyjmowaniu: string,
        zweryfikowanaPrzyPakowaniu: string,
        zrealizowaneJednostkiId: string,
        numerZbiorczy: string,
        dataModyfikacji: string,
        historiaJednostkiId: string,
        wydanieNaStrefieID: string,
        znaczniki: string,
        nrObiegu: string, 
        liczbaUzyc: string,
        dataZapakowania: string,
        zapakowalId: string,
        wydaniePrzezKlientaId: string,
        przyjeciePrzezKlientaId: string,
        etykietaZbiorczaId: string,
        procesId: string,
        reklamacjaId: string, 
        terminWaznosciDni: string,
        saUwagi: string,
        saKomentarze: string
    ) 
    {
        this.jednostkaId = jednostkaId;  
        this.poprzedniaJednostkaId = poprzedniaJednostkaId;
        this.produktNazwa = produktNazwa; 
        this.numer = Number.parseInt(numer);
        this.strefaNazwa = strefaNazwa;
        this.anulowana =  anulowana === 'true' || anulowana === '1'; 
        this.procesSterId = Number.parseInt(procesSterId); 
        this.procesDezWstId = Number.parseInt(procesDezWstId);
        this.zakonczona = zakonczona === 'true' || zakonczona === '1';
        this.dataUtworzenia = new Date(dataUtworzenia); 
        this.cito = cito === 'true' || cito === '1'; 
        this.zdarzenieId = zdarzenieId;
        this.przyjecieId = new Date(przyjecieId); 
        this.wydanieId = new Date(wydanieId); 
        this.wersjaNaklejki = Number.parseInt(wersjaNaklejki); 
        this.koszt = koszt; 
        this.terminWaznosci = new Date(terminWaznosci); 
        this.kosztRzeczywisty = kosztRzeczywisty; 
        this.dataAnulowania = new Date(dataAnulowania); 
        this.anulowal = anulowal; 
        this.sztukiProd = Number.parseInt(sztukiProd); 
        this.zrodloCenyJednostki = Number.parseInt(zrodloCenyJednostki); 
        this.tagiZmiany = tagiZmiany; 
        this.zweryfikowanaPrzyPrzyjmowaniu = zweryfikowanaPrzyPrzyjmowaniu === 'true' || zweryfikowanaPrzyPrzyjmowaniu === '1';
        this.zweryfikowanaPrzyPakowaniu = zweryfikowanaPrzyPakowaniu === 'true' || zweryfikowanaPrzyPakowaniu === '1'; 
        this.zrealizowaneJednostkiId = new Date(zrealizowaneJednostkiId);
        this.numerZbiorczy = numerZbiorczy; 
        this.dataModyfikacji = new Date(dataModyfikacji); 
        this.historiaJednostkiId = new Date(historiaJednostkiId); 
        this.wydanieNaStrefieID = Number.parseInt(wydanieNaStrefieID); 
        this.znaczniki = znaczniki; 
        this.nrObiegu = Number.parseInt(nrObiegu);
        this.liczbaUzyc = Number.parseInt(liczbaUzyc); 
        this.dataZapakowania = new Date(dataZapakowania); 
        this.zapakowalId = zapakowalId; 
        this.wydaniePrzezKlientaId = new Date(wydaniePrzezKlientaId); 
        this.przyjeciePrzezKlientaId = new Date(przyjeciePrzezKlientaId);
        this.etykietaZbiorczaId = Number.parseInt(etykietaZbiorczaId); 
        this.procesId = Number.parseInt(procesId); 
        this.reklamacjaId = new Date(reklamacjaId);  
        this.terminWaznosciDni = Number.parseInt(terminWaznosciDni); 
        this.saUwagi = saUwagi === 'true' || saUwagi === '1'; 
        this.saKomentarze = Number.parseInt(saKomentarze);
    }

    static fromJSON(json: any): Jednostka {
        return new Jednostka(
          json[0],
          json[1],
          json[2], 
          json[3], 
          json[4], 
          json[5], 
          json[6], 
          json[7], 
          json[8], 
          json[9], 
          json[10], 
          json[11], 
          json[12], 
          json[13], 
          json[14], 
          json[15], 
          json[16], 
          json[17], 
          json[18], 
          json[19], 
          json[20], 
          json[21], 
          json[22], 
          json[23], 
          json[24], 
          json[25], 
          json[26], 
          json[27], 
          json[28],
          json[29], 
          json[30], 
          json[31], 
          json[32], 
          json[33], 
          json[34], 
          json[35], 
          json[36], 
          json[37], 
          json[38], 
          json[39], 
          json[40], 
          json[41], 
          json[42]
          );
        }
}