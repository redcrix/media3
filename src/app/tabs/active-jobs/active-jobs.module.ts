import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActiveJobsPage } from './active-jobs.page';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: ActiveJobsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ActiveJobsPage]
})
export class ActiveJobsPageModule {}
