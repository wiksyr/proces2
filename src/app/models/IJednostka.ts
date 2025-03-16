export interface IJednostka { 
    jednostkaId: number; 
    poprzedniaJednostkaId: number; 
    produktNazwa: string;
    strefaNazwa: string;  
    numer: number|null;
    anulowana: boolean;
    procesSterId: number|null;
    procesDezWstId: number|null;
    zakonczona: boolean;
    dataUtworzenia: Date;
    cito: boolean;
    zdarzenieId: string;
    przyjecieId: Date;
    wydanieId: Date;
    wersjaNaklejki: number|null;
    koszt: string;
    terminWaznosci: Date|null;
    kosztRzeczywisty: string;
    dataAnulowania: Date|null;
    anulowal: string;
    sztukiProd: number|null;
    zrodloCenyJednostki: number|null;
    tagiZmiany: string;
    zweryfikowanaPrzyPrzyjmowaniu: boolean;
    zweryfikowanaPrzyPakowaniu: boolean;
    zrealizowaneJednostkiId: Date|null;
    numerZbiorczy: string;
    dataModyfikacji: Date|null;
    historiaJednostkiId: Date|null;
    wydanieNaStrefieID: number|null;
    znaczniki: string;
    nrObiegu: number|null, 
    liczbaUzyc: number|null;
    dataZapakowania: Date|null;
    zapakowalId: string;
    wydaniePrzezKlientaId: Date|null;
    przyjeciePrzezKlientaId: Date|null;
    etykietaZbiorczaId: number|null;
    procesId: number|null;
    reklamacjaId: Date|null; 
    terminWaznosciDni: number|null;
    saUwagi: boolean;
    saKomentarze: number|null;
    strefaId: number; 
    produktId: number; 
}



