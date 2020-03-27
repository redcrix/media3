import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpPage } from './otp.page';

const routes: Routes = [
  {
    path: 'verify/:mobile',
    component: OtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpPageRoutingModule {}
