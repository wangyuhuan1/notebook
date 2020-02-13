import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res=>{
      console.log(res)
    })
  }

}
