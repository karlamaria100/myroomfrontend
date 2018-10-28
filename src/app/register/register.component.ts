import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {MainService} from "../services/main.service";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  showSpinner: boolean;

  register = false;
  userForm: FormGroup;


  closeSignUpModal  () {
    this.dialogRef.close();
  }


  constructor(private _formBuilder: FormBuilder,private router: Router,  public mainService: MainService) { }






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
    const data = {
      name: this.userForm.value.companyName
    }
    this.mainService.insertCompany(data).
    subscribe(response => {
      console.log(response);
      this.insertUser(response);
    }, Error => console.log(Error));
  }

  insertUser(Obj) {
    const data = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      role: 1,
      company: Obj.company.id
    }
    this.mainService.insertAdmin(data).
    subscribe(response => {
      console.log(response);
      this.register = true;
      this.showSpinner = false;
    }, Error => console.log(Error));
  }



}
