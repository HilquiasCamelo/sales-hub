import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ScreenSizeService } from './shared/service/screen-size.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showUserSubLinks: any;
  showCatalogSubLinks: any;
  
    @ViewChild('drawer') drawer: ElementRef;
    @ViewChild('menuButton') menuButton: ElementRef;
    showSearch = false;
    showRecommendationSubLinks: boolean;
   
    showCartSubLinks = false;
  
  
    constructor(public screenSizeService: ScreenSizeService) { }
  
  
    ngOnInit() {ScreenSizeService }
  
    toggleSearch() {
      this.showSearch = !this.showSearch;
    }
  
  
    toggleSubLinks(sublink: string) {
      switch (sublink) {
        case 'catalog':
          this.showCatalogSubLinks = !this.showCatalogSubLinks;
          break;
        case 'cart':
          this.showCartSubLinks = !this.showCartSubLinks;
          break;
        case 'user':
          this.showUserSubLinks = !this.showUserSubLinks;
          break;
        case 'recommendation':
          this.showRecommendationSubLinks = !this.showRecommendationSubLinks;
          break;
        default:
          break;
      }
    }
  
  title = 'sales-hub';
}
