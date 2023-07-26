import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';
import { HttpClientModule } from '@angular/common/http';
import { ExibitionItemComponent } from './exibitions/exibition-item/exibition-item.component';
import { ExibitionDetailsComponent } from './exibitions/exibition-details/exibition-details.component';
import { ArtworkItemComponent } from './exibitions/exibition-details/artwork-item/artwork-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExibitionEditComponent } from './exibitions/exibition-edit/exibition-edit.component';
import { ArtworkDetailsComponent } from './exibitions/exibition-details/artwork-details/artwork-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    ExibitionsComponent,
    NewExibitionComponent,
    ExibitionItemComponent,
    ExibitionDetailsComponent,
    ArtworkItemComponent,
    ExibitionEditComponent,
    ArtworkDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
