import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  currentUrl: any;
  pages = new Map<string, string>();

  constructor(private router: Router) { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    // this.pages.set("Automobile", "directions_car");
    // this.pages.set("Caricatures", "sentiment_satisfied_alt");
    // this.pages.set("Doodles", "adb");
    // this.pages.set("Portraits", "face");
    // this.pages.set("Posters", "movie");
    // this.pages.set("Abstract", "extension");

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
}
