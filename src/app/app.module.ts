import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
	NgxQRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBm2vF6eXB3bOQ3qknG1VXzJ95C-LcCJvI'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
