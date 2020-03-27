import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.page.html',
  styleUrls: ['./basic-details.page.scss'],
})
export class BasicDetailsPage implements OnInit {
  tel_no: any;

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  SaveAndContinue(){
    this.navCtrl.navigateForward('select-location');
  }

  mychange(val) {
    const self = this;
    let chIbn = val.split('-').join('');
    if (chIbn.length > 0) {
      chIbn = chIbn.match(new RegExp('.{1,4}', 'g')).join('-');
    }

   

  
    console.log(chIbn);
    this.tel_no = chIbn;
  }


}
