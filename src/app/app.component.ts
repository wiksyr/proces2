import { Component, HostBinding, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { JednostkiComponent } from './pages/jednostki/jednostki.component';
import { RodzajeProductowComponent } from './pages/rodzaje-productow/rodzaje-productow.component';
import { JednostkiBiezaceComponent } from './pages/jednostki-biezace/jednostki-biezace.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    const sizeClassName = Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    return `${sizeClassName} app` ;
  }

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  ngOnInit() {
    this.container.createComponent(RodzajeProductowComponent); 
    this.container.createComponent(JednostkiComponent); 
    this.container.createComponent(JednostkiBiezaceComponent); // Preloads DashboardComponent in memory
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
