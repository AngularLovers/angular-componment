import { Component } from '@angular/core';
import { CKEditor } from 'ng2-ckeditor';

import './ckeditor.loader.ts';

@Component({
  selector: 'common-ckeditor',
  directives: [CKEditor],
  template: require('./common-ckeditor.html')
})

export class CommonCkeditorComponent {
  private ckeditorContent;
  private config;

  constructor() {
    this.ckeditorContent = `<p>Hello CKEditor</p>`;
    this.config = {uiColor: '#F0F3F4', height: '600'};
  }
}
