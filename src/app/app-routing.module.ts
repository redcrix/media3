import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'phoneinput',
    loadChildren: () => import('./phoneinput/phoneinput.module').then( m => m.PhoneinputPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'basic-details',
    loadChildren: () => import('./basic-details/basic-details.module').then( m => m.BasicDetailsPageModule)
  },
  {
    path: 'select-location',
    loadChildren: () => import('./select-location/select-location.module').then( m => m.SelectLocationPageModule)
  },
  {
    path: 'upload-photos',
    loadChildren: () => import('./upload-photos/upload-photos.module').then( m => m.UploadPhotosPageModule)
  },
  
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
