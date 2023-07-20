import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  showCatalogSubLinks = false;
  showCartSubLinks = false;
  showUserSubLinks = false;
  showRecommendationSubLinks = false;
  showSearch = false;

  constructor() { }

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

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
