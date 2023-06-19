import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TooltipModule  } from 'ngx-bootstrap/tooltip';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TooltipModule,
    MdbCarouselModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule
  ],
  declarations: [
    HomepageComponent,
    PageNotFoundComponent,
    AppComponent
  ],
  providers: [ { provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
