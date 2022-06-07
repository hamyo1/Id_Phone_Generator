import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdGeneratorComponent } from './FakeGeneratorComponents/id-generator/id-generator.component';
import { PhoneGeneratorComponent } from './FakeGeneratorComponents/phone-generator/phone-generator.component';
import { AddressGeneratorComponent } from './FakeGeneratorComponents/address-generator/address-generator.component';
import { HttpClientModule } from '@angular/common/http';
import { RealCarIdFromDataGovComponent } from './FakeGeneratorComponents/real-car-id-from-data-gov/real-car-id-from-data-gov.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RandNameEmailComponent } from './FakeGeneratorComponents/rand-name-email/rand-name-email.component';

@NgModule({
  declarations: [
    AppComponent,
    IdGeneratorComponent,
    PhoneGeneratorComponent,
    AddressGeneratorComponent,
    RealCarIdFromDataGovComponent,
    RandNameEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
