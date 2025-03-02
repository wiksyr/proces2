import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DxHttpModule } from 'devextreme-angular/http';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DxAccordionModule, DxBoxModule, DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDropDownButtonModule, DxFormModule, DxLoadPanelModule, DxScrollViewModule, DxTemplateModule, DxTextAreaComponent, DxTextAreaModule, DxTextBoxModule, DxToolbarModule, DxValidationGroupModule, DxValidatorModule } from 'devextreme-angular';
import { CommonModule, NgIf } from '@angular/common';
import { FormTextboxModule } from './components/form-textbox/form-textbox.component';
import { FormPhotoModule } from './components/form-photo/form-photo.component';
import { HttpTimeoutInterceptor } from './services/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CommonModule, 
    DxHttpModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule, 
    HttpClientModule, 
    DxDataGridModule, 
    DxBoxModule,
    DxTextBoxModule, 
    DxDateBoxModule, 
    DxTextAreaModule, 
    DxButtonModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTimeoutInterceptor,
      multi: true, // To ensure multiple interceptors can be chained if needed
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  }
