import { Component, ViewChild } from '@angular/core';
import { ProductTypeApiService } from '../../services/ProductTypeApiService';
import DataGrid, { DataChange, InitNewRowEvent, InitializedEvent } from 'devextreme/ui/data_grid';
import { DxDataGridComponent } from 'devextreme-angular';
import deMessages from "./pl.json";
import { locale, loadMessages } from "devextreme/localization";
import { RodzajProduktu } from '../../models/RodzajProduktu';

@Component({
  selector: 'app-rodzaje-productow',
  templateUrl: './rodzaje-productow.component.html',
  styleUrl: './rodzaje-productow.component.css',
  standalone: false
})
export class RodzajeProductowComponent {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent|undefined ;
  
  events: Array<string> = [];

  data: RodzajProduktu[] = [];; // Variable to hold the fetched data
  errorMessage: string = ''; // Variable to hold any error message
  rawdata: string= ""; 
  selectedRodzajProduktu: RodzajProduktu | undefined;
  colCountByScreen: object; 
  hasSelected: boolean = false;
  btnHideLabel: string = "Zamknij";
  isLoading: boolean = true; 

  constructor(private apiService: ProductTypeApiService) { 
    loadMessages(deMessages);
    locale('pl');
    this.isLoading = true;  
    this.colCountByScreen = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4
  };

}

readonly allowedPageSizes = [5, 10, 'all'];

readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

displayMode = 'full';

showPageSizeSelector = true;

showInfo = false;

showNavButtons = true;


async refreshDataGrid() {
  this.isLoading = true; 
  this.data = await this.apiService.getProductType(); 

  // this.apiService.getProductType().subscribe({
  //   next: (data) => {
  //     // Handle the response (array of products)
  //     this.data = data;
  //       this.isLoading = false; 
  //   },
  //   error: (err) => {
  //     // Handle error if the HTTP request fails
  //     this.errorMessage = 'Failed to load products';
  //     console.error('Error loading products:', err);
  //   },
  // });

  this.dataGrid?.instance.refresh();
}

removeFilter() { 

}

customizeColumns(columns: any) {
  columns[0].width = 70;
}

get isCompactMode() {
  return this.displayMode === 'compact';
}

logEvent(eventName: any) {
  this.events.unshift(eventName);
}

clearEvents() {
  this.events = [];
}

  async ngOnInit(): Promise<void> {
    // Calling the API and subscribing to the observable
  this.data = await this.apiService.getProductType(); 
  this.isLoading = false; 
  //   this.apiService.getProductType().subscribe({
  //     next: (data) => {
  //       // Handle the response (array of products)
  //       this.data = data;
  //         this.isLoading = false; 
  //     },
  //     error: (err) => {
  //       // Handle error if the HTTP request fails
  //       this.errorMessage = 'Failed to load products';
  //       console.error('Error loading products:', err);
  //     },
  //   });
  }

  onSelectionChanged(event: any) {
    const selectedRowsData = event.selectedRowsData;  // Array of selected row data
    if (selectedRowsData.length > 0) {
      this.selectedRodzajProduktu = selectedRowsData[0];  // Store the first selected row
      this.hasSelected = true; 
      console.log(this.hasSelected)
    } else {
      this.selectedRodzajProduktu = undefined;  // No row selected
    }
  }

  onRemoveClick(event: any) {
    alert(`Button clicked for ${event.row.data.id}`);
  }

  onHide(event: any) {
    this.hasSelected = false; 
  }
  
}
