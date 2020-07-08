import { MaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeneficiaryComponent } from './components/beneficiary/beneficiary.component';
import { BeneficiaryListComponent } from './components/beneficiary-list/beneficiary-list.component';
import { BeneficiaryAppComponent } from './components/beneficiary-app/beneficiary-app.component';
import { BeneficiaryDetailsComponent } from './components/beneficiary-details/beneficiary-details.component';
import { BeneficiaryHeaderComponent } from './components/beneficiary-header/beneficiary-header.component';

@NgModule({
  declarations: [
    AppComponent,
    BeneficiaryComponent,
    BeneficiaryListComponent,
    BeneficiaryAppComponent,
    BeneficiaryDetailsComponent,
    BeneficiaryHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
