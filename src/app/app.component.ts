import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  darkTheme(event) {
    if (event.detail.checked) {
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      toggleDarkTheme(prefersDark.matches);
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
      // Add or remove the "dark" class based on if the media query matches
      function toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
      }

    } else {
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: :root)');
      toggleDarkTheme(prefersDark.matches);
      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));
      // Add or remove the "dark" class based on if the media query matches
      function toggleDarkTheme(shouldAdd) {
        document.body.classList.toggle('dark', shouldAdd);
      }
    }

  }

}
