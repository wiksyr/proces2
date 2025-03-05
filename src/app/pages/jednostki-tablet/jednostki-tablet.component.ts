import { Component, OnInit } from '@angular/core';
import { JednostkaSkrocona } from '../../models/JednostkaSkrocona';
import { loadMessages, locale } from 'devextreme/localization';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import deMessages from "../../pl.json";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jednostki-tablet',
  templateUrl: './jednostki-tablet.component.html',
  styleUrl: './jednostki-tablet.component.scss',
  standalone: false
})
export class JednostkiTabletComponent implements OnInit {

  data: JednostkaSkrocona[] = []; 
  isLoading: boolean = true; 
  search: string = "";
  snapshotData: JednostkaSkrocona[] = [];

  constructor(private apiService: JednostkiApiService, private route: ActivatedRoute) { 
    loadMessages(deMessages);
    locale('pl');
    this.isLoading = true;  
  };

  filter() { 
    this.data = this.snapshotData.filter(x => x.jednostkaId.toString().includes(this.search)); 
    this.data.concat(this.snapshotData.filter(x => x.produktNazwa.includes(this.search))); 
  }

  async ngOnInit() {
    this.snapshotData = this.route.snapshot.data['data']; 
    this.data = this.snapshotData.slice(0,1000); 
    this.isLoading = false; 
  }
}
