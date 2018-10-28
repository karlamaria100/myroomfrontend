import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showResend: boolean;
  public showAlertMessage: boolean;
  public messageAlert: string;
  public user: any = {email:"",password:""};

  constructor(public dialogRef: MatDialogRef<LoginComponent>, public mainService: MainService) { }

  ngOnInit() {
  }

  doLogin () {
    this.showResend = false;
    this.showAlertMessage = false;
    if (!this.user.email || !this.validateEmail(this.user.email)) {
      this.showAlertMessage = true;
      this.messageAlert = 'Email not valid!';
      return;
    }
    if (!this.user.password || this.user.password.length < 6) {
      this.showAlertMessage = true;
      this.messageAlert = 'Password not valid!';
      return;
    }
    this.mainService.login(this.user.email, this.user.password).subscribe(value => {
      console.log(value);
      if (value.body.status === 'ACCEPTED') {
        // localStorage.setItem("Cookie",value.headers.get('Set-Cookie'));
        this.showAlertMessage = true;
        this.messageAlert = 'Logged successfully';
        // this.sharedService.userData = value.body.details;
        // this.sharedService.logged = true;
        this.dialogRef.close();
        location.reload();
      } else if (value.body.status === 'FAILED_DEPENDENCY') {
        this.showAlertMessage = true;
        this.messageAlert = 'Account not verified';
        this.showResend = true;
      } else if (value.body.status === 'CONFLICT') {
        this.showAlertMessage = true;
        this.messageAlert = 'Password or email incorrect!';
      } else {
        this.showAlertMessage = true;
        this.messageAlert = 'Error occurred! Try again!';
      }
    })
  };

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  close (){
    this.dialogRef.close();
  }
}
