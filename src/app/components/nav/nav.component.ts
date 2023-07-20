import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { ScreenSizeService } from 'src/app/shared/screen-size.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('drawer') drawer: ElementRef;
  @ViewChild('menuButton') menuButton: ElementRef;
  showSearch = false;

  constructor(private renderer: Renderer2, 
    private breakpointObserver: BreakpointObserver, public screenSizeService: ScreenSizeService) { }


  ngOnInit() {ScreenSizeService }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

}
