import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  dialogRefRegister: MatDialogRef<RegisterComponent>;

  constructor( public dialog: MatDialog) { }

  ngOnInit() {
  }

  doRegister() {
    this.dialogRefRegister = this.dialog.open(RegisterComponent);
  }



}
