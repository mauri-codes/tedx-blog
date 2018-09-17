import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  constructor(private location: Location, private router: Router){
    
  }
  ngOnInit(){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(val => {
      if ( this.location.path() === "/blog")
        this.title = "TEDx Blog"
      else
        this.title = "TEDx Admin"
    });
  }
}
