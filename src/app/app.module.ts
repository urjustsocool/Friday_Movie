import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Camera} from "@ionic-native/camera";
import {FileTransfer} from "@ionic-native/file-transfer";

import {MoviesProvider} from '../providers/movies/movies';
import {CommentsProvider} from '../providers/comments/comments';
import {UserProvider} from "../providers/user/user";
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      mode: "ios",
      preloadModules: true,
      tabsHideOnSubPages: 'true',
      backButtonText: ''
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,
    CommentsProvider,
    UserProvider,
    Storage,
    CookieService
  ]
})
export class AppModule {}
