import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  activeIndex: number = 0;
  numbers:any;
  numberss:any;
  btnText:any = "Skip"
  showTextBtn: boolean = true;
  slideOpts={
    autoplay:true,
    loop:true
  }
  @ViewChild('slides',{static:true}) slides: IonSlides;
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
    this.slides.length()
    .then(num=>{
      this.numbers = num;
      this.numberss = Array(this.numbers).fill(0).map((x,i)=>i);
    })
  }

  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        this.activeIndex = index;
        this.buttonSwitch(this.activeIndex);
      })
  }


  buttonSwitch(index)
  {
    if(index == 0 || index == 3)
    {
      this.showTextBtn = true;
      this.switchButtons(index);
    }


    else
    {
      this.showTextBtn = false;
    }
    console.log( this.showTextBtn)
   
  }

  switchButtons(index)
  {
    if(index == 0)
    {
      this.btnText = "Skip"
    }

    
    if(index == 3)
    {
      this.btnText = "Finish"
    }
  }

  slideNext()
  {
    this.slides.slideNext();
  }

  slideBack()
  {
    this.slides.slidePrev();
  }

  goPhoneInput()
  {
    this.navCtrl.navigateRoot('phoneinput');
  }
}
