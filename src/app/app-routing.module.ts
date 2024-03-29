import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDetailsComponent } from './pages/add-details/add-details.component';
import { ViewDetailsComponent } from './pages/view-details/view-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: 'view-details',
    pathMatch: 'full',
    component: ViewDetailsComponent,
  },
  {
    path: 'add-details',
    pathMatch: 'full',
    component: AddDetailsComponent,
  },
  { path: '', component: AddDetailsComponent },
  { path: '**', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
