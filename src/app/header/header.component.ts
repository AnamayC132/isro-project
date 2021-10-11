import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentUrl;
  pages = new Map<string, string>();
  constructor() { }

    
  
  ngOnInit(): void {
    this.pages.set( "/brand","Product Details:Go to product details page"); 
    this.pages.set( "/baby1","Consumer Benefits:Go to consumer benefits page");
    
  }


}
