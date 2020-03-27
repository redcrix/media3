import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneinputPageRoutingModule } from './phoneinput-routing.module';

import { PhoneinputPage } from './phoneinput.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneinputPageRoutingModule
  ],
  declarations: [PhoneinputPage]
})
export class PhoneinputPageModule {}
