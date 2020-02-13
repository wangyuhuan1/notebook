import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  @Input() title:string
  constructor() { }

  ngOnInit() {
  }

}
