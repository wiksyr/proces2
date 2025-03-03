
import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  NgModule,
  Output,
  Input,
  SimpleChanges,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxAccordionModule,
  DxButtonModule,
  DxDropDownButtonModule,
  DxToolbarModule,
  DxLoadPanelModule,
  DxScrollViewModule,
  DxFormModule,
  DxValidatorModule,
  DxValidationGroupModule,
} from 'devextreme-angular';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { FormPhotoModule } from '../../components/form-photo/form-photo.component';
import { FormTextboxModule } from '../../components/form-textbox/form-textbox.component';
import { distinctUntilChanged, Subject, Subscription} from 'rxjs';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { ScreenService } from '../../shared/services';
import { Router } from '@angular/router';
import deMessages from "../../pl.json";
import { loadMessages, locale } from 'devextreme/localization';
import { JednostkaSkrocona } from '../../models/JednostkaSkrocona';
//import { Contact } from 'src/app/types/contact';


@Component({
  selector: 'app-jednostki-panel',
  templateUrl: './jednostki-panel.component.html',
  styleUrl: './jednostki-panel.component.scss'
})

export class JednostkiPanelComponent implements OnInit, OnChanges, AfterViewChecked, OnDestroy {
  @Input() isOpened = false;

  @Input() userId: number|any;

  @Output() isOpenedChange = new EventEmitter<boolean>();

  @Output() pinnedChange = new EventEmitter<boolean>();

  private pinEventSubject = new Subject<boolean>();

  formData: JednostkaSkrocona|any;

  jednostkaData: JednostkaSkrocona|any;

  pinned = false;

  isLoading = true;

  isEditing = false;

  isPinEnabled = false;

  userPanelSubscriptions: Subscription[] = [];

  constructor(private screen: ScreenService, private service: JednostkiApiService, private router: Router) {
    loadMessages(deMessages);
    locale('pl');
    this.userPanelSubscriptions.push(
      this.screen.changed.subscribe(this.calculatePin),
      this
        .pinEventSubject
        .pipe(distinctUntilChanged())
        .subscribe(this.pinnedChange)
    );
  }

  ngOnInit(): void {
    this.calculatePin();
  }

  ngAfterViewChecked(): void {
    this.pinEventSubject.next(this.pinned);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { userId } = changes;

    if (userId?.currentValue) {
      this.loadUserById(userId.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.userPanelSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  loadUserById = (id: number) => {
    this.isLoading = true;
    
    this.service.getById(id.toString()).then(result => 
      {
        this.formData = result; 
        this.jednostkaData = { ...this.formData };
        this.isLoading = false;
        this.isEditing = false;
      }
    ); 
  };

  onClosePanel = () => {
    this.isOpened = false;
    this.pinned = false;
    this.isOpenedChange.emit(this.isOpened);
  };

  onPinClick = () => {
    this.pinned = !this.pinned;
  };

  onSaveClick = ({ validationGroup } : DxButtonTypes.ClickEvent) => {
    if (!validationGroup.validate().isValid) return;
    this.jednostkaData = { ...this.formData };
    this.isEditing = !this.isEditing;
  }

  calculatePin = () => {
    this.isPinEnabled = this.screen.sizes['screen-large'] || this.screen.sizes['screen-medium'];
    if (this.pinned && !this.isPinEnabled) {
      this.pinned = false;
    }
  };

  toggleEdit = () => {
    this.isEditing = !this.isEditing;
  };

  cancelHandler() {
    this.toggleEdit();
    this.formData = { ...this.jednostkaData };
  }

  navigateToDetails = () => {
    this.router.navigate(['/app-jednostki']);
  };
}


@NgModule({
  imports: [
    DxAccordionModule,
    DxButtonModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxLoadPanelModule,
    DxScrollViewModule,
    DxFormModule,
    DxValidatorModule,
    DxValidationGroupModule,
    FormTextboxModule,
    FormPhotoModule, 
    CommonModule
  ],
  declarations: [JednostkiPanelComponent],
  exports: [JednostkiPanelComponent],
})
export class JednostkiPanelModule { }

