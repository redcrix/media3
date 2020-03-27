import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FCM } from '@ionic-native/fcm/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// import { Calendar } from '@ionic-native/calendar';
import {HttpTokenInterceptor} from './core/interceptors/token.interceptor';
import {ApiURLInterceptor} from './core/interceptors/api-url.interceptor';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMaps } from '@ionic-native/google-maps/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    FCM,
    BackgroundMode,
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
   // { provide: HTTP_INTERCEPTORS, useClass: ApiURLInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
