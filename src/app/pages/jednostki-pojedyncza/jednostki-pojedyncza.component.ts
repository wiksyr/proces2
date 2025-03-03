import {
  Component, OnInit, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxScrollViewModule,
} from 'devextreme-angular';
// import {
//   CardActivitiesModule,
//   CardNotesModule,
//   CardMessagesModule,
// } from 'src/app/components';
// import { DataService } from 'src/app/services';
// import { forkJoin, map } from 'rxjs';
// import { Contact } from 'src/app/types/contact';
// import { Messages } from 'src/app/types/messages';
// import { Notes } from 'src/app/types/notes';
// import { Opportunities } from 'src/app/types/opportunities';
// import { ContactFormModule } from 'src/app/components/library/contact-form/contact-form.component';
// import { ContactCardsModule } from 'src/app/components/utils/contact-cards/contact-cards.component';
// import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { Jednostka } from '../../models/Jednostka';

@Component({
  selector: 'app-jednostki-pojedyncza',
  templateUrl: './jednostki-pojedyncza.component.html',
  styleUrl: './jednostki-pojedyncza.component.scss',
  standalone: false
})
export class JednostkiPojedynczaComponent implements OnInit {
  jednostkaId: string = "";

  jednostkaData: Jednostka|any;

  //contactNotes: Notes;

  //contactMessages: Messages;

  //activeOpportunities: Opportunities;

  //closedOpportunities: Opportunities;

  jednostkaName = '...';

  isLoading = false;

  constructor(private service: JednostkiApiService) {
  }

  async ngOnInit() {
    this.isLoading = false;
  }

  loadData = async () => {
    // forkJoin([
    //   this.service.getById(this.jednostkaId.toString()),
    //   this.service.getContactMessages(this.contactId),
    //   this.service.getActiveContactOpportunities(this.contactId),
    //   this.service.getClosedContactOpportunities(this.contactId),
    // ]).pipe(
    //   map(
    //     ([
    //       contactNotes,
    //       contactMessages,
    //       activeOpportunities,
    //       closedOpportunities
    //     ]) => ({
    //       contactNotes,
    //       contactMessages,
    //       activeOpportunities,
    //       closedOpportunities
    //     }))
    //   ).subscribe(
    //     (data) => Object.keys(data).forEach((key) => this[key] = data[key])
    // );

    try
    {
      this.service.getById(this.jednostkaId.toString()).then((data) => {
        this.jednostkaName = "";
        this.jednostkaData = data;
        this.isLoading = false;
      })
    }
    catch
    {
      this.jednostkaName = "Podaj Id jednostki"
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

