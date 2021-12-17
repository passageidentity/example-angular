import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from 'src/components/layout/layout.component';
import { BannerComponent } from 'src/components/banner/banner.component';
import { AuthorizedComponent } from 'src/components/authorized/authorized.component';
import { UnauthorizedComponent } from 'src/components/unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BannerComponent,
    AuthorizedComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
