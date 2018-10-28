import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {MainService} from "../services/main.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public step1 = true;
  public step2 = false;
  public step3 = false;
  public step4 = false;
  public step5 = false;
  public user: any = {passions: []};
  public passions = [];
  public allPassions = [];
  public avatar: any;
  public alertMessage: string;
  public showAlertMessage: boolean;
  public choseAll: boolean;


  closeSignUpModal  () {
    this.dialogRef.close();
  }


  constructor(public dialogRef: MatDialogRef<RegisterComponent>, public mainService: MainService) { }

  ngOnInit() {
  }

  goToStep (step, options) {
    this.showAlertMessage = false;
    this.alertMessage = '';
    if (step === 1) {
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step5 = false;
    }

    if (step === 2) {
      this.step1 = false;
      this.step2 = true;
      this.step3 = false;
      this.step4 = false;
      this.step5 = false;
    }
    if (step === 3) {
      if (!this.user.firstName) {
        this.showAlertMessage = true;
        this.alertMessage = 'First name is missing';
        return;
      } else if (!this.user.lastName) {
        this.showAlertMessage = true;
        this.alertMessage = 'Last name is missing';
        return;
      } else if (!this.user.email || !this.validateEmail(this.user.email)) {
        this.showAlertMessage = true;
        this.alertMessage = 'Email is missing';
        return;
      } else if (!this.user.password || this.user.password.length < 8) {
        this.showAlertMessage = true;
        this.alertMessage = 'Password needs to have at least 8 chars.';
        return;
      }

      if (this.user.profPicture) {
        this.avatar = this.user.profPicture.slice(this.user.profPicture.lastIndexOf("/") + 1, this.user.profPicture.lastIndexOf("."));
      }
      this.step1 = false;
      this.step2 = false;
      this.step3 = true;
      this.step4 = false;
      this.step5 = false;
    }

    if (step === 4) {
      if (!options) {
        this.showAlertMessage = true;
        this.alertMessage = 'Please select a profile picture!';
        return;
      }
      this.user.profPicture = 'images/' + options + '.png';
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = true;
      this.step5 = false;
    }

    if (step === 5) {
      this.step1 = false;
      this.step2 = false;
      this.step3 = false;
      this.step4 = false;
      this.step5 = true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  finishAccount  () {
    this.showAlertMessage = false;
    if (!this.user.firstName || this.user.firstName.length === 0) {
      this.showAlertMessage = true;
      this.alertMessage = 'Please complete all fields!';
      return;
    } else if (!this.user.lastName || this.user.lastName.length === 0) {
      this.showAlertMessage = true;
      this.alertMessage = 'Please complete all fields!';
      return;
    } else if (!this.user.email || this.user.email.length === 0) {
      this.showAlertMessage = true;
      this.alertMessage = 'Please complete all fields!';
      return;
    } else if (!this.user.password || this.user.password.length === 0) {
      this.showAlertMessage = true;
      this.alertMessage = 'Please complete all fields!';
      return;
    } else if (!this.user.gender || this.user.gender.length === 0) {
      this.showAlertMessage = true;
      this.alertMessage = 'Please complete all fields!';
      return;
    }
  }

}
