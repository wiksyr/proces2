import { IJednostka } from "./IJednostka";

export class Jednostka implements IJednostka {
    jednostkaId: number; 
    poprzedniaJednostkaId: number; 
    produktNazwa: string; 
    Numer: string;
    anulowana: string;
    procesSterId: string;
    procesDezWstId: string;
    zakonczona: string;
    dataUtworzenia: string;
    cito: string;
    zdarzenieId: string;
    przyjecieId: string;
    wydanieId: string;
    wersjaNaklejki: string;
    koszt: string;
    terminWaznosci: string;
    kosztRzeczywisty: string;
    dataAnulowania: string;
    anulowal: string;
    sztukiProd: string;
    zrodloCenyJednostki: string;
    tagiZmiany: string;
    zweryfikowanaPrzyPrzyjmowaniu: string;
    zweryfikowanaPrzyPakowaniu: string;
    zrealizowaneJednostkiId: string;
    numerZbiorczy: string;
    dataModyfikacji: string;
    historiaJednostkiId: string;
    wydanieNaStrefieID: string;
    znaczniki: string;
    liczbaUzyc: string;
    dataZapakowania: string;
    zapakowalId: string;
    wydaniePrzezKlientaId: string;
    przyjeciePrzezKlientaId: string;
    etykietaZbiorczaId: string;
    procesId: string;
    reklamacjaId: string; 
    terminWaznosciDni: string;
    saUwagi: string;
    saKomentarze: string;

    constructor(
        jednostkaId: number, 
        poprzedniaJednostkaId: number, 
        produktNazwa: string, 
        Numer: string,
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
        this.Numer = Numer;
        this.anulowana = anulowana; 
        this.procesSterId = procesSterId; 
        this.procesDezWstId = procesDezWstId;
        this.zakonczona = zakonczona;
        this.dataUtworzenia = dataUtworzenia; 
        this.cito = cito; 
        this.zdarzenieId = zdarzenieId;
        this.przyjecieId = przyjecieId; 
        this.wydanieId = wydanieId; 
        this.wersjaNaklejki = wersjaNaklejki; 
        this.koszt = koszt; 
        this.terminWaznosci = terminWaznosci; 
        this.kosztRzeczywisty = kosztRzeczywisty; 
        this.dataAnulowania = dataAnulowania; 
        this.anulowal = anulowal; 
        this.sztukiProd = sztukiProd; 
        this.zrodloCenyJednostki = zrodloCenyJednostki; 
        this.tagiZmiany = tagiZmiany; 
        this.zweryfikowanaPrzyPrzyjmowaniu = zweryfikowanaPrzyPrzyjmowaniu;
        this.zweryfikowanaPrzyPakowaniu = zweryfikowanaPrzyPakowaniu; 
        this.zrealizowaneJednostkiId = zrealizowaneJednostkiId;
        this.numerZbiorczy = numerZbiorczy; 
        this.dataModyfikacji = dataModyfikacji; 
        this.historiaJednostkiId = historiaJednostkiId; 
        this.wydanieNaStrefieID = wydanieNaStrefieID; 
        this.znaczniki = znaczniki; 
        this.liczbaUzyc = liczbaUzyc; 
        this.dataZapakowania = dataZapakowania; 
        this.zapakowalId = zapakowalId; 
        this.wydaniePrzezKlientaId = wydaniePrzezKlientaId; 
        this.przyjeciePrzezKlientaId = przyjeciePrzezKlientaId;
        this.etykietaZbiorczaId = etykietaZbiorczaId; 
        this.procesId = procesId; 
        this.reklamacjaId = reklamacjaId;  
        this.terminWaznosciDni = terminWaznosciDni; 
        this.saUwagi = saUwagi; 
        this.saKomentarze = saKomentarze;
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
          json[40]
          );
        }
}