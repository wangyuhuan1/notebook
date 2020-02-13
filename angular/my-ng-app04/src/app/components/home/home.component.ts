import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public id:string="123"
  constructor(private router:Router) { }

  ngOnInit() {
  }
  handleClick(){
    let navigationExtras:NavigationExtras={
      queryParams:{
        "id":"1214"
      }
    }
    this.router.navigate(['/detail'],navigationExtras)
  }
}
