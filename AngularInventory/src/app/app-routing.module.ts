import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/homepage.component';
import { ViewOrdersComponent } from './vieworders/vieworders.component';


const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'order-component', component: ViewOrdersComponent },
  { path: '', redirectTo: 'home-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
