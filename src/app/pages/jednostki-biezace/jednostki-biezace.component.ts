import { Component, ViewChild } from '@angular/core';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { loadMessages, locale } from 'devextreme/localization';
import deMessages from "../../pl.json";
import { DxDataGridComponent } from 'devextreme-angular';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Jednostka } from '../../models/Jednostka';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jednostki-biezace',
  templateUrl: './jednostki-biezace.component.html',
  styleUrl: './jednostki-biezace.component.scss',
  standalone: false
})
export class JednostkiBiezaceComponent {

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent|undefined ;
  
  events: Array<string> = [];

  data: Jednostka[] = [];; // Variable to hold the fetched data
  errorMessage: string = ''; // Variable to hold any error message
  rawdata: string= ""; 
  pageSize: number = 10000; 
  pageNumber: number = 1; 
  loadingMessage: string = "Pobieram ..."; 
  selectedRodzajProduktu: Jednostka | undefined;
  colCountByScreen: object; 
  hasSelected: boolean = false;
  btnHideLabel: string = "Zamknij";
  isLoading: boolean = true; 
  jednostkaId: number|any = 1;
  isPanelOpened = false;

  constructor(private apiService: JednostkiApiService, private route: ActivatedRoute) { 
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
    this.pageNumber = 1;
    const tempData = await this.apiService.getPages(this.pageSize, this.pageNumber); 
    this.isLoading = false;
}

async loadPage() {
  this.isLoading = true; 
  this.pageNumber += 1;
  const finalData: Jednostka[] = []; 
  // Calling the API and subscribing to the observable
    for(let i=0; i<5; i++)
      {
        const f1 = this.apiService.getPages(this.pageSize, this.pageNumber); 
        const f2 = this.apiService.getPages(this.pageSize+1, this.pageNumber); 
        const f3 = this.apiService.getPages(this.pageSize+2, this.pageNumber); 
        const f4 = this.apiService.getPages(this.pageSize+3, this.pageNumber); 
        const f5 = this.apiService.getPages(this.pageSize+4, this.pageNumber); 
        const f6 = this.apiService.getPages(this.pageSize+5, this.pageNumber); 
        const f7 = this.apiService.getPages(this.pageSize+6, this.pageNumber); 
        const f8 = this.apiService.getPages(this.pageSize+7, this.pageNumber); 
        const f9 = this.apiService.getPages(this.pageSize+8, this.pageNumber); 
        const f10 = this.apiService.getPages(this.pageSize+9, this.pageNumber); 
        const f11 = this.apiService.getPages(this.pageSize+10, this.pageNumber); 
        
        const [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10] = await Promise.all([f1, f2, f3, f4, f5, f6, f7, f8, f9, f10])
        
      for (let item of data1)
        {
          finalData.push(item); 
        }
        for (let item of data2)
        {
          finalData.push(item); 
        }
        for (let item of data3)
        {
          finalData.push(item); 
        }
        for (let item of data4)
        {
          finalData.push(item); 
        }
        for (let item of data5)
        {
          finalData.push(item); 
        }
        for (let item of data6)
        {
          finalData.push(item); 
        }
        for (let item of data7)
        {
          finalData.push(item); 
        }
        for (let item of data8)
        {
          finalData.push(item); 
        }
        for (let item of data9)
        {
          finalData.push(item); 
        }
        for (let item of data10)
        {
          finalData.push(item); 
        }
    
        this.pageNumber +=10; 
      }
      
    for (let item of finalData)
      {
        this.data.push(item); 
      }
      
  this.isLoading = false; 
  this.loadingMessage = `Pobieram ...`
  this.dataGrid?.instance.refresh(); 
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
      this.data = this.route.snapshot.data['data']; 
      this.isLoading = false; 
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
