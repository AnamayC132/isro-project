import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  currentUrl: any;
  pages = new Map<string, string>();
  baseUrl:string="assets/";
  ngOnInit(): void {
    this.pages.set("c", "/isro"); 
    this.pages.set("a", "/moon");
    this.pages.set("b", "/mars");
    // this.pages.set("live_tv", "/entertainment");
  
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

}
