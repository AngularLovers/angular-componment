import { Component, OnInit } from '@angular/core';
import { ProjectItemsService } from "./projectItem.service";

@Component({
  selector: 'web-project',
  providers:[ProjectItemsService],
  styles: [require('./web-project.scss')],
  template: require('./web-project.html')
})
export class WebProjectComponent implements OnInit {

  projectItems;

  constructor(private projectItemsService: ProjectItemsService) {
  }

  ngOnInit() {
    this.projectItemsService.getProjectItems().subscribe(res=> {
      this.projectItems = res
    })
  }
}
