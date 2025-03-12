import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DxAccordionModule, DxButtonModule, DxDataGridModule, DxDateBoxModule, DxDropDownButtonModule, DxFormModule, DxLoadPanelModule, DxScrollViewModule, DxSelectBoxModule, DxTemplateModule, DxTextAreaModule, DxTextBoxModule, DxToolbarModule, DxValidationGroupModule, DxValidatorModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';
import { FormTextboxModule } from './components/form-textbox/form-textbox.component';
import { FormPhotoModule } from './components/form-photo/form-photo.component';
import { RodzajeProductowComponent } from './pages/rodzaje-productow/rodzaje-productow.component';
import { JednostkiComponent } from './pages/jednostki/jednostki.component';
import { JednostkiPanelModule } from './pages/jednostki-panel/jednostki-panel.component';
import { CzytnikKodowComponent } from './pages/czytnik-kodow/czytnik-kodow.component';
import { JednostkiBiezaceComponent } from './pages/jednostki-biezace/jednostki-biezace.component';
import { JednostkiDataResolver } from './services/jednostki-data-resolver';
import { JednostkiPojedynczaComponent } from './pages/jednostki-pojedyncza/jednostki-pojedyncza.component';
import { JednostkiBiezaceDataResolver } from './services/jednostki-biezace-data-resolver';
import { ContactFormModule } from "./components/jednostka-form/jednostka-form.component";
import { FormItemDateModule } from './components/form-datebox/form-datebox-component';
import { JednostkiTabletComponent } from './pages/jednostki-tablet/jednostki-tablet.component';
import { JednostkiResponsiveComponent } from './pages/jednostki-responsive/jednostki-responsive.component';
import { CardJednostkaSkroconaModule } from './components/card-jednostka-skrocona/card-jednostka-skrocona.component';
import { FormGalleryModule } from './components/form-gallery/form-gallery.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FormsModule, NgModel } from '@angular/forms';
import { CzytnikKodowModalComponent } from './pages/czytnik-kodow-modal/czytnik-kodow-modal.component';
import { JednostkaCameraCaptureComponent } from './pages/jednostka-camera-capture/jednostka-camera-capture.component';
import { CameraCaptureModalComponent } from './pages/camera-capture-modal/camera-capture-modal.component';
import { SharedModule } from './app-shared.module';

const routes: Routes = [
  {
    path: 'pages/camera-capture-modal',
    component: CameraCaptureModalComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostka-camera-capture',
    component: JednostkaCameraCaptureComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/czytnik-kodow-modal',
    component: CzytnikKodowModalComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostki-responsive',
    component: JednostkiResponsiveComponent,
    resolve: { data: JednostkiDataResolver }, 
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostki-tablet',
    component: JednostkiTabletComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostki-pojedyncza',
    component: JednostkiPojedynczaComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostki-biezace',
    component: JednostkiBiezaceComponent,
    resolve: { data: JednostkiBiezaceDataResolver },
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/czytnik-kodow',
    component: CzytnikKodowComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/jednostki',
    component: JednostkiComponent, 
    resolve: { data: JednostkiDataResolver }
  },
  {
    path: 'pages/rodzaje-productow',
    component: RodzajeProductowComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    DxDataGridModule,
    CommonModule,
    DxLoadPanelModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxTemplateModule,
    DxAccordionModule,
    DxButtonModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxScrollViewModule,
    DxFormModule,
    DxValidatorModule,
    DxValidationGroupModule,
    FormTextboxModule,
    FormPhotoModule,
    JednostkiPanelModule, 
    ContactFormModule, 
    FormItemDateModule, 
    CardJednostkaSkroconaModule, 
    FormGalleryModule, 
    ZXingScannerModule, 
    FormsModule, 
    DxSelectBoxModule, 
    SharedModule
    ], 
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    ProfileComponent,
    RodzajeProductowComponent,
    JednostkiComponent,
    CzytnikKodowComponent,
    JednostkiBiezaceComponent,
    JednostkiPojedynczaComponent,
    JednostkiTabletComponent,
    JednostkiResponsiveComponent,
    CzytnikKodowModalComponent
  ]
})
export class AppRoutingModule { }
