import { Component, OnInit } from '@angular/core';
import {SharedService} from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public shared:SharedService) { }

  ngOnInit() {
  }


  select(string){
    if(string == 'room'){
      this.shared.general = this.shared.rooms;
      this.shared.string = "Rooms";
    }
    if(string == 'session'){
      this.shared.general = this.shared.sessions;
      this.shared.string = "Sessions";
    }
    if(string == 'accommodation'){
      this.shared.general = this.shared.accommodations;
      this.shared.string = "Accommodations";
    }
    if(string == 'company'){
      this.shared.general = this.shared.companies;
      this.shared.string = "Companies";
    }
  }
}
