import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneinputPage } from './phoneinput.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneinputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneinputPageRoutingModule {}
