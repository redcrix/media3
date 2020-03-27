import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LoginRequest } from '../core/modal/login-request.model';
import { Router } from '@angular/router';
import {JobSeekerService} from "../core/services/job-seeker.service";
import {LoginResponse} from "../core/modal/login-response.modal";
import {AppService} from "../core/services/app.service";
import {Search} from "../core/modal/search.modal";
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  @ViewChild('otp1', {static: false}) otp1: any;
  @ViewChild('otp2', {static: false}) otp2: any;
  @ViewChild('otp3', {static: false}) otp3: any;
  @ViewChild('otp4', {static: false}) otp4: any;
  @ViewChild('otp5', {static: false}) otp5: any;
  @ViewChild('otp6', {static: false}) otp6: any;

  mobile = '';
  constructor(
    private appService: AppService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private jobSeekerService: JobSeekerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mobile = params.mobile;
    });
  }

  next(el) {
    el.setFocus(); 
  }

  submitOTP() {

      this.router.navigateByUrl('basic-details');

    let otp = this.otp1.el.value
    +this.otp2.el.value
    +this.otp3.el.value
    +this.otp4.el.value
    +this.otp5.el.value
    +this.otp6.el.value
    if(otp.length === 6 && this.mobile) {
      let request = new LoginRequest();
      request.otp = otp;
      request.mobile = this.mobile;
      this.authService.verifyOTP(request).subscribe(data => {
        this.appService.setCurrentAccount(data);
        console.log(this.appService.getCurrentAccount());
        // this.router.navigateByUrl('tabs');
      }, error => {},
          () => {
              this.decideRedirection();
          });
    }
  }

  decideRedirection() {
    // todo find job seeker by mobile
    const search = new Search('mobile', this.mobile );
   // this.jobSeekerService.searchAndSort(0, 1, null, null, search)
  }
}
