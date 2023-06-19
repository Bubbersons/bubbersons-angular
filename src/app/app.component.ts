import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windowWidth = window.innerWidth;
  isExpanded = false;//default on loading
  state = 'collapsed';
  public innerWidth: number|any;
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;

  }
  ngOnInit(): void {
    this.isExpanded = false;//default on loading
    this.innerWidth = window.innerWidth;
  }
}
