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

  constructor(private apiService: JednostkiApiService, private route: ActivatedRoute) { 
    loadMessages(deMessages);
    locale('pl');
    this.isLoading = true;  
  };

  async ngOnInit() {
    this.data = this.route.snapshot.data['data']; 
    this.isLoading = false; 
  }
}
