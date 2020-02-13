import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // public msg:string="我是你儿子"
  constructor() {
    console.log("constructor")
   }

  ngOnChanges() {
    console.log("ngOnChanges")
  }
  ngOnInit() {
    console.log("ngOnInit")
  }pt
  ngDoCheck(){
    console.log()
  }
}
