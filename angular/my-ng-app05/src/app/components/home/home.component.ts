import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../services/common.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public hotCities:string[]=["北京","上海","广州","深圳"];
  public city:any;
  constructor(public common:CommonService) { }

  ngOnInit() {
    this.city=this.common.getCity()
  }
  handleClick(item:string){
    console.log(item)
    this.common.changeCity(item);
  }
}
