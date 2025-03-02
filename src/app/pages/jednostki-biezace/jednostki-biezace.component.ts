import { Component, ViewChild } from '@angular/core';
import { JednostkaDto } from '../../models/JednostkaDto';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { loadMessages, locale } from 'devextreme/localization';
import deMessages from "../../pl.json";
import { DxDataGridComponent } from 'devextreme-angular';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-jednostki-biezace',
  templateUrl: './jednostki-biezace.component.html',
  styleUrl: './jednostki-biezace.component.scss',
  standalone: false
})
export class JednostkiBiezaceComponent {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent|undefined ;
  
  events: Array<string> = [];

  data: JednostkaDto[] = [];; // Variable to hold the fetched data
  errorMessage: string = ''; // Variable to hold any error message
  rawdata: string= ""; 
  pageSize: number = 5000; 
  pageNumber: number = 1; 
  loadingMessage: string = "Pobieram dane ..."; 
  selectedRodzajProduktu: JednostkaDto | undefined;
  colCountByScreen: object; 
  hasSelected: boolean = false;
  btnHideLabel: string = "Zamknij";
  isLoading: boolean = true; 
  jednostkaId: number|any = 1;
  isPanelOpened = false;

  constructor(private apiService: JednostkiApiService) { 
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


refreshDataGrid() {
    this.isLoading = true; 
    this.pageNumber = 1;
    // Calling the API and subscribing to the observable
    for(let i=0; i<20; i++)
    {
      this.apiService.getPages(this.pageSize, this.pageNumber).subscribe({
        next: (data) => {
          // Handle the response (array of products)
            for(const item of data)
              {
                this.data.push(item); 
              }
              
          this.isLoading = false; 
        },
        error: (err) => {
          // Handle error if the HTTP request fails
          this.errorMessage = 'Failed to load products';
          console.error('Error loading products:', err);
        },
      });
      this.pageNumber +=1; 
    }
}

loadPage() {
  this.isLoading = true; 
  this.pageNumber += 1;
  // Calling the API and subscribing to the observable
    for(let i=0; i<20; i++)
      {
        this.apiService.getPages(this.pageSize, this.pageNumber).subscribe({
          next: (data) => {
            // Handle the response (array of products)
            for(const item of data)
              {
                this.data.push(item); 
              }
              
            this.isLoading = false; 
          },
          error: (err) => {
            // Handle error if the HTTP request fails
            this.errorMessage = 'Failed to load products';
            console.error('Error loading products:', err);
          },
        });
        this.pageNumber +=1; 
      }
}

removeFilter() { 

}


rowClick(e: DxDataGridTypes.RowClickEvent) {
  console.log('rowclick'); 
  console.log(e); 
  const { data } = e;

  this.jednostkaId = data.jednostkaId;
  this.isPanelOpened = true;
}

onOpenedChange = (value: boolean) => {
  if (!value) {
    this.jednostkaId = null;
  }
};

onPinnedChange = () => {
  this.dataGrid?.instance.updateDimensions();
};

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

  ngOnInit(): void {
    // Calling the API and subscribing to the observable

      for(let i=0; i<20; i++)
        {
          this.apiService.getPages(this.pageSize, this.pageNumber).subscribe({
          next: (data) => {
            // Handle the response (array of products)
            for(const item of data)
            {
              this.data.push(item); 
            }
            
            this.isLoading = false; 
          },
          error: (err) => {
            // Handle error if the HTTP request fails
            this.errorMessage = 'Failed to load products';
            console.error('Error loading products:', err);
          },
          });
          this.pageNumber += 1; 
        }
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
