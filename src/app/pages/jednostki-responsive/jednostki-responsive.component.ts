import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jednostki-responsive',
  templateUrl: './jednostki-responsive.component.html',
  styleUrl: './jednostki-responsive.component.scss',
  standalone: false
})
export class JednostkiResponsiveComponent implements OnInit {
  isTabletPortrait: boolean = false;
  isTabletLandscape: boolean = false;
  isHandsetPortrait: boolean = false; 
  isHandsetLandscape: boolean = false; 
  isPCPortrait: boolean = false;
  isPCLandscape: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.WebLandscape, 
      Breakpoints.WebPortrait
    ]).subscribe(result => {
      this.isHandsetPortrait = result.breakpoints[Breakpoints.HandsetPortrait];
      this.isHandsetPortrait = result.breakpoints[Breakpoints.HandsetLandscape];
      this.isTabletPortrait = result.breakpoints[Breakpoints.TabletPortrait];
      this.isTabletLandscape = result.breakpoints[Breakpoints.TabletLandscape];
      this.isPCPortrait = result.breakpoints[Breakpoints.WebPortrait];
      this.isPCLandscape = result.breakpoints[Breakpoints.WebLandscape];
    });
  }

}
