import { Component } from '@angular/core';

@Component({
  selector: 'tedx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'Admin';
  changedContent(t) {
    console.log("zzzzzzzzzzzzzzzzzzz")
    console.log(t)
  }
}
