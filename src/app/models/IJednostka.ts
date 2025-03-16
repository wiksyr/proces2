export interface IJednostka { 
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
    nrObiegu: number, 
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
    strefaId: number; 
    produktId: number; 
}



