import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { ScreenSizeService } from 'src/app/shared/service/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
showUserSubLinks: any;
showCatalogSubLinks: any;

  @ViewChild('drawer') drawer: ElementRef;
  @ViewChild('menuButton') menuButton: ElementRef;
  showSearch = false;
  showRecommendationSubLinks: boolean;
 
  showCartSubLinks = false;


  constructor(private renderer: Renderer2, 
    private breakpointObserver: BreakpointObserver, 
    public screenSizeService: ScreenSizeService,
    private router: Router) { }


  ngOnInit() {
    ScreenSizeService;
    this.router.navigate(['home'])
  }

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

}
