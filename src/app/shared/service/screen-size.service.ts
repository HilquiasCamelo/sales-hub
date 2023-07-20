import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isDesktop(): boolean {
    let isDesktop = true; // Valor padrão para desktop
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape])
      .subscribe(result => {
        isDesktop = !result.matches;
      });
    return isDesktop;
  }
}