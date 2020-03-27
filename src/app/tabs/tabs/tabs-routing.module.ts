import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'jobs',
        loadChildren: () => import('../jobs/jobs.module').then( m => m.JobsPageModule)
      },
      {
        path: 'my-jobs',
        loadChildren: () => import('../my-jobs/my-jobs.module').then( m => m.MyJobsPageModule)
      },
      {
        path: 'active-jobs',
        loadChildren: () => import('../active-jobs/active-jobs.module').then( m => m.ActiveJobsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo:'jobs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
