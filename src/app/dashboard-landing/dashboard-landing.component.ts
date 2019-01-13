import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-dashboard-landing',
  templateUrl: './dashboard-landing.component.html',
  styleUrls: ['./dashboard-landing.component.css']
})
export class DashboardLandingComponent implements OnInit {

  public Company: any;
  public companyObjectRetrieved: any;
  public errorMsg;
  employeeNumber: number = 0;
  projectNumber: number = 0;
  hoursNumber: number = 0;
  Math: any;
  employeesMinimList: { id: number, email: string }[] = [];
  projectsMinimList: { id: number, name: string }[] = [];
  hoursMinimList = [];

  constructor(public shared:SharedService, public mainService:MainService) {
    this.Math = Math;
  }

  ngOnInit() {
    this.mainService.getAllYouNeed().subscribe((rasp) => {
      this.shared.general = rasp.body.companies;
      this.shared.general = "Companies"
      this.shared.companies = rasp.body.companies;
      this.shared.rooms = rasp.body.rooms;
      this.shared.accommodations = rasp.body.accommodations;
      this.shared.sessions = rasp.body.sessions;

      this.shared.departments = rasp.body.departments;


    });
  }

}
