import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router} from '@angular/router';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public fcm: FCM,
    private backgroundMode: BackgroundMode
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      // background mode enable or disable
      this.backgroundMode.enable();
      
      this.fcm.getToken().then(token => {
        console.log('FCM Token Data Raw', token);
        console.log('FCM Token Data JSON', JSON.stringify(token));
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });

      // Firebase Notification Datat getting 
      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log("Received in background", data);
        } else {
          console.log("Received in foreground", data);
        };
      });
      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        // backend.registerToken(token);
      });
    });

      

  }
  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }
}
