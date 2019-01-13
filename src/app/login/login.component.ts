import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  userForm: FormGroup;

  public loginOk = true;
  public loginForbidden = true;
  public showMailInput = false;
  public badSentForgot = false;
  public showSentForgot = false;
  public Token: any;
  public tokenRetrived: any;
  public UserAdminObject: any;
  public userObjectRetrived: any;
  public companyObjectRetrieved: any;
  public Company: any;

  constructor(private _formBuilder: FormBuilder, private mainService: MainService, private router: Router) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$')]]
    });
  }

  onSubmit() {

    this.mainService.login(this.userForm.value.email,this.userForm.value.password).subscribe(response => {
        if (response.json().status === "BAD_REQUEST") {
          this.loginOk = false;
        }
        else if(response.json().status === "FORBIDDEN" )  {
          this.loginForbidden = false;
        } else {
          this.loginForbidden = true;
          this.loginOk = true;
          this.badSentForgot = false;
          localStorage.setItem('Auth', response.headers.get('jwttoken'));

          console.log("Login response:");
          console.log(localStorage.getItem("Auth"));

          response = response.body;

          localStorage.setItem('UserAdminObject', JSON.stringify(response));

          if (response.details.type == 0) {
            this.router.navigate(['/dashboard'])

            this.userObjectRetrived = localStorage.getItem('UserAdminObject');
            this.UserAdminObject = JSON.parse(this.userObjectRetrived);
            console.log('retrievedObject: ', this.UserAdminObject);

            this.companyObjectRetrieved = localStorage.getItem('Company');
              this.Company = JSON.parse(this.companyObjectRetrieved);
            console.log('retrievedObjectCompany: ', this.UserAdminObject);
          } else {
            alert("The web dashboard is currently unavailable for user accounts. Use an admin account or the mobile app.")
            this.router.navigate(['/admin-only'])
          }
        }

      }, Error => console.log(Error));
  }

  // doLogin () {
  //   this.showResend = false;
  //   this.showAlertMessage = false;
  //   if (!this.user.email || !this.validateEmail(this.user.email)) {
  //     this.showAlertMessage = true;
  //     this.messageAlert = 'Email not valid!';
  //     return;
  //   }
  //   if (!this.user.password || this.user.password.length < 6) {
  //     this.showAlertMessage = true;
  //     this.messageAlert = 'Password not valid!';
  //     return;
  //   }
  //   this.mainService.login(this.user.email, this.user.password).subscribe(value => {
  //     console.log(value);
  //     if (value.body.status === 'ACCEPTED') {
  //       // localStorage.setItem("Cookie",value.headers.get('Set-Cookie'));
  //       this.showAlertMessage = true;
  //       this.messageAlert = 'Logged successfully';
  //       // this.sharedService.userData = value.body.details;
  //       // this.sharedService.logged = true;
  //       this.dialogRef.close();
  //       location.reload();
  //     } else if (value.body.status === 'FAILED_DEPENDENCY') {
  //       this.showAlertMessage = true;
  //       this.messageAlert = 'Account not verified';
  //       this.showResend = true;
  //     } else if (value.body.status === 'CONFLICT') {
  //       this.showAlertMessage = true;
  //       this.messageAlert = 'Password or email incorrect!';
  //     } else {
  //       this.showAlertMessage = true;
  //       this.messageAlert = 'Error occurred! Try again!';
  //     }
  //   })
  // };

  showForgotPasswordInput() {
    this.showMailInput = !this.showMailInput;
  }

  forgotPassword() {
    const data = {
      email: this.forgotPasswordForm.value.email,
    };
    // this.mainService.forgotPasswordUser(data).
    // subscribe(response => {
    //   if (response.status === "ACCEPTED") {
    //     this.showSentForgot = true;
    //     this.badSentForgot = false;
    //     this.showMailInput = false;
    //     console.log(response);
    //   }
    //   if (response.status === "BAD_REQUEST") {
    //
    //     this.badSentForgot = true;
    //     console.log(response);
    //   }
    //   console.log(response);
    //
    // }, Error => console.log(Error));
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }



}
