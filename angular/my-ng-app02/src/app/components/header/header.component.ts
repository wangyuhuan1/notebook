import { Component, OnInit } from '@angular/core';
import cartList from './data'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public msg:string="hello world"
  public checked:boolean=true
  public cartList:any=cartList
  constructor() { 
    console.log(cartList)
  }

  ngOnInit() {
  }
  handleChange(){
    console.log(this.checked)
  }
}
