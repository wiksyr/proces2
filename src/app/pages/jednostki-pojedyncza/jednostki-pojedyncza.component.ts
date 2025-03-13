import {
  Component, OnInit, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { Jednostka } from '../../models/Jednostka';
import { CzytnikKodowModalService } from '../../services/czytnikKodowModalService';

@Component({
  selector: 'app-jednostki-pojedyncza',
  templateUrl: './jednostki-pojedyncza.component.html',
  styleUrl: './jednostki-pojedyncza.component.scss',
  standalone: false
})
export class JednostkiPojedynczaComponent implements OnInit {
  jednostkaId: string = "";

  jednostkaData: Jednostka|any;

  isModalOpen: boolean = false;

  error: string|any; 

  jednostkaName = '...';

  isLoading = false;

  constructor(private service: JednostkiApiService, private czytnikService: CzytnikKodowModalService) {
  }

  async ngOnInit() {
    this.isLoading = false;

    this.czytnikService.modalData$.subscribe((data) => {
      this.jednostkaId = data; // Capture the data passed from the modal
      this.isModalOpen = false; // Close the modal
      this.search(); 
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  loadData = async () => {

    try
    {
      await this.service.getById(this.jednostkaId.toString()).then((data) => {
        this.jednostkaName = "";
        this.jednostkaData = data;
        this.isLoading = false;
        this.error = null; 
      })
    }
    catch
    {
      this.jednostkaName = "Podaj Id jednostki"
      this.error = "Nie znaleziono jednostki.";
      this.isLoading = false;
    }
  };

  refresh = async () => {
    this.isLoading = true;
    await this.loadData();
  };
  
  search = async () => {
    this.isLoading = true;
    await this.loadData();
  };
}

