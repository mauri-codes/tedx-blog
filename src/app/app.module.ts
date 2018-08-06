import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { AdminComponent } from './view/admin/admin.component'
import { BlogComponent } from './view/blog/blog.component'

import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    QuillModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
