import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { routes } from '../app.module';
import { User } from '../model/user';
import { Location } from '../model/location';
import { AuthenticateService } from '../services/authenticate.service';
import { LocationService } from '../services/location.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  locations:Location[];
  constructor(public auth:AuthenticateService, private route:Router,public locate:LocationService) {
    this.locations=[];
  }

  ngOnInit(): void {
    if(false&&(!this.auth.currentUser || this.auth.currentUser.userId==0)){
      this.route.navigateByUrl('/signin');
    }
    else{
      this.locate.getLocations().subscribe((res)=>{
        this.locations=res;
      })
    }
  }

}
