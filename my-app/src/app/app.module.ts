import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SightsgeoComponent } from './sightsgeo/sightsgeo.component';
import { SightslandmarksComponent } from './sightslandmarks/sightslandmarks.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HousingComponent } from './housing/housing.component';
import { DemographicComponent } from './demographic/demographic.component';
import { ParksComponent } from './parks/parks.component';
import { SchoolsComponent } from './schools/schools.component';
import { SndComponent } from './snd/snd.component';
import { TransportComponent } from './transport/transport.component';
import { ContactinfComponent } from './contactinf/contactinf.component';

@NgModule({
  declarations: [
    AppComponent,
    SightsgeoComponent,
    SightslandmarksComponent,
    ActivitiesComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    HousingComponent,
    DemographicComponent,
    ParksComponent,
    SchoolsComponent,
    SndComponent,
    TransportComponent,
    ContactinfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
