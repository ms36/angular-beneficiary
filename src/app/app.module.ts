import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OverlayModule} from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { BeneficiaryAppComponent } from './components/beneficiary-app/beneficiary-app.component';
import { BeneficiaryDetailsComponent } from './components/beneficiary-details/beneficiary-details.component';
import { BeneficiaryHeaderComponent } from './components/beneficiary-header/beneficiary-header.component';


@NgModule({
  declarations: [
    AppComponent,
    BeneficiaryComponent,
    BeneficiaryAppComponent,
    BeneficiaryDetailsComponent,
    BeneficiaryHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
