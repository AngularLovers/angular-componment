import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-item',
  styles: [require('./project-item.scss')],
  template: require('./project-item.html')
})
export class ProjectItemComponent implements OnInit {

  @Input() projectItem;


  ngOnInit() {

  }
}
