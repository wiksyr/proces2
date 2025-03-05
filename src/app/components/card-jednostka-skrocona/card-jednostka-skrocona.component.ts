import { CommonModule } from '@angular/common';
import {
  Component, NgModule, Input, SimpleChanges, OnInit, OnChanges,
} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
// import { CardMenuModule } from '../card-menu/card-menu.component';
import { JednostkaSkrocona } from '../../models/JednostkaSkrocona';

@Component({
  selector: 'card-jednostka-skrocona',
  templateUrl: './card-jednostka-skrocona.component.html',
  styleUrls: ['./card-jednostka-skrocona.component.scss'],
})
export class CardJednostkaComponent {
  @Input() jednostki: JednostkaSkrocona[]|any;

  @Input() isLoading: boolean = false;
}

@NgModule({
  imports: [
    DxListModule,
    DxButtonModule,
    DxLoadPanelModule,

    CommonModule,
  ],
  declarations: [CardJednostkaComponent],
  exports: [CardJednostkaComponent],
})
export class CardJednostkaSkroconaModule { }