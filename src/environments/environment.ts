// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyAmFFqjM54rN8LccINRm7ME8Xa726MO81M",
    authDomain: "hour4u-uat.firebaseapp.com",
    databaseURL: "https://hour4u-uat.firebaseio.com",
    projectId: "hour4u-uat",
    storageBucket: "hour4u-uat.appspot.com",
    messagingSenderId: "1057720385634",
    appId: "1:1057720385634:web:76a6341500a6403d26113b",
    measurementId: "G-ZQJGFM8NR3"
  },
  log: true,
  environmentName: 'local',
  version: 1.0,
  // api_url: 'https://uat.api.hour4u.com'
  api_url: 'http://localhost:8080',
  bottomTab: [
    {
      label: 'Jobs',
      url: 'jobs',
      name: 'home',
      src: 'assets/images/home.png',
      class: ''
    },
    {
      label: 'Active Jobs',
      url: 'active-jobs',
      name: 'open',
      src: 'assets/images/groups.png',
      srcActivated: 'assets/images/groups-select.png',
      class: ''
    },
    {
      label: 'My Jobs',
      url: 'my-jobs',
      name: 'document',
      src: 'assets/images/home.png',
      srcActivated: 'assets/images/home-select.png',
      class: 'hide',
      disabled: true
    },
    {
      label: 'Profile',
      url: 'profile',
      name:'person',
      src: 'assets/images/home.png',
      srcActivated: 'assets/images/home-select.png',
      class: 'hide',
      disabled: true
    }
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
