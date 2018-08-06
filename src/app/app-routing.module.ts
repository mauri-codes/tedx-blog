import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './view/admin/admin.component'
import { BlogComponent } from './view/blog/blog.component'

const routes: Routes = [
    { path: 'admin', component: AdminComponent },
    { path: 'blog', component: BlogComponent }
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }