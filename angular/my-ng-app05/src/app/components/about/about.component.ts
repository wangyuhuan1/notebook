import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public flag:boolean=true;
  @ViewChild('app',{static:false}) app:any;
  constructor() { }
  ngOnInit() {

  }
  ngAfterViewInit(){
    console.log(this.app)
  }
}
