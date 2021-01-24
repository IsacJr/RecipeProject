import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbarCollapsing(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
