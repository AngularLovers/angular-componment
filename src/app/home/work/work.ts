import { Component, OnInit } from '@angular/core';
import { WorkService } from "./work.service";

@Component({
  selector: 'xiaomo-work',
  template: require('./work.html'),
  styles:[require('./work.css')],
  providers:[WorkService]
})
export class WorkComponent implements OnInit {
  workData:any;

  constructor(public workService:WorkService) {
  }

  ngOnInit() {
    this.workService.getData().subscribe((data)=> {
      this.workData = data;
      console.log(this.workData);
    })
  }
}
