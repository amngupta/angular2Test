import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-details.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from './heros.services';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import {AppRoutingModule} from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    ],
  declarations: [AppComponent, HeroDetailComponent, DashboardComponent,
    HeroesComponent],
  bootstrap: [AppComponent],
  providers: [HeroService],

})
export class AppModule { }
