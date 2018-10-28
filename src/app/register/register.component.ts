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
    this.userForm = this._formBuilder.group({
      companyName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$')]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  gotToLogin(){
    this.router.navigate(['./login']);
  }
  onSubmit() {
    this.showSpinner = true;
    var data = {
      name: this.userForm.value.companyName
    }
    this._service.insertCompany(data).
    subscribe(response => {
      console.log(response);
      this.insertUser(response)
    }, Error => console.log(Error));
  }

  insertUser(Obj) {
    var data = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      role: 1,
      company: Obj.company.id
    }
    this._service.insertAdmin(data).
    subscribe(response => {
      console.log(response);
      //if(response === "ACCEPTED") this.register = true;
      this.register = true;
      this.showSpinner = false;
    }, Error => console.log(Error));
  }



}
