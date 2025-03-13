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
  filteredSnapshotData: JednostkaSkrocona[] = [];
  isFiltered: boolean = false; 
  pageSize: number = 100; 
  pageNumber: number = 0; 
  startDate: Date|any; 
  endDate: Date|any; 

  constructor(private apiService: JednostkiApiService, private route: ActivatedRoute) { 
    loadMessages(deMessages);
    locale('pl');
    this.isLoading = true;  
  };

  async filter() { 
    if (this.search.length == 0) { 
      this.isFiltered = false; 
      this.loadData(); 
      return; 
    }
    this.isFiltered = true; 
    this.filteredSnapshotData = this.snapshotData.filter(x => x.produktNazwa.toLowerCase().includes(this.search.toLowerCase()));  
    if(this.filteredSnapshotData.length > 0)
    {
      this.loadData(); 
    }
    else { 
      const jednostka = await this.apiService.getById(this.search); 
      this.data = []; 
      this.data.push(jednostka); 
    }
  }

  moveNext() { 
    this.pageNumber += 1; 
    this.loadData(); 
    if(((this.pageNumber+1)*100) > this.snapshotData.length && !this.isFiltered){
      this.pageNumber -=1; 
    }
    if(((this.pageNumber+1)*100) > this.filteredSnapshotData.length && this.isFiltered){
      this.pageNumber -=1; 
    }
  }

  movePrevious() { 
    this.pageNumber -= 1; 
    if (this.pageNumber < 0)
    {
      this.pageNumber = 0; 
    }
    this.loadData(); 
  }

  loadData() { 
    if(this.isFiltered){ 
      this.data = this.filteredSnapshotData.slice(this.pageNumber * this.pageSize, (this.pageNumber + 1)*this.pageSize); 
    }
    else { 
      this.data = this.snapshotData.slice(this.pageNumber * this.pageSize, (this.pageNumber + 1)*this.pageSize); 
    }
  }

  clear() { 
    this.pageNumber = 0; 
    this.isFiltered = false; 
    this.loadData(); 
  }

  async ngOnInit() {
    this.snapshotData = this.route.snapshot.data['data']; 
    this.data = this.snapshotData.slice(0,100); 
    this.isLoading = false; 
  }

  onDateStartChange(e: any) {
    if(this.getMonthDifference(this.startDate, this.endDate) > 2)
    {
      const start = new Date(this.endDate.getFullYear(), this.endDate.getMonth() -2, 1); 
      this.startDate = start; 
    }
  }

  onDateEndChange(e: any) {
    if(this.getMonthDifference(this.startDate, this.endDate) > 2)
    {
      const end = new Date(this.startDate.getFullYear(), this.startDate.getMonth() +3, 1); 
      this.endDate = end; 
    }
  }

  getMonthDifference(startDate: Date, endDate: Date): number {
    // Calculate the year difference
    let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    
    // Calculate the month difference
    let monthsDiff = endDate.getMonth() - startDate.getMonth();
  
    // If the month difference is negative, subtract one year and adjust the month difference
    if (monthsDiff < 0) {
      yearsDiff--;
      monthsDiff += 12;
    }
  
    // Return total difference in months
    return yearsDiff * 12 + monthsDiff;
  }

  getData = async() => { 
    this.isLoading = true; 
    this.snapshotData = await this.apiService.getSkroconaByDate(this.startDate, this.endDate, 20000, 1); 
    this.data = this.snapshotData.slice(0,100); 
    this.isLoading = false; 
  }
}
