import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialModule } from './ng-material/ng-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PeopleComponent } from './pages/people/people.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
    declarations: [
        AppComponent,
        PeopleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgMaterialModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        NgxSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
