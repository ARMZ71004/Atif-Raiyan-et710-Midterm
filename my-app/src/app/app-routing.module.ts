import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
        {path: '', component: HomeComponent},
        {path: 'geography', component: SightsgeoComponent},
        {path: 'landmark', component: SightslandmarksComponent},
        {path: 'activities', component: ActivitiesComponent},
        {path: 'housing', component: HousingComponent},
        {path: 'demo', component: DemographicComponent},
        {path: 'park', component: ParksComponent},
        {path: 'school', component: SchoolsComponent},
        {path: 'snd', component: SndComponent},
        {path: 'transport', component: TransportComponent},
        {path: 'contact', component: ContactinfComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
