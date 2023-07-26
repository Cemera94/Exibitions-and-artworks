import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "exibitions", component: ExibitionsComponent },
  { path: "exibitions/:id", component: ExibitionDetailsComponent },
  { path: "new-exibition", component: NewExibitionComponent },
  { path: "", redirectTo: "/home", pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
