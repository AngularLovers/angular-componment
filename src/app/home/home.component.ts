import { Component } from "@angular/core";
import { AppState } from "../app.service";
import { Title } from "./title";

@Component({

  selector: 'home',
  providers: [
    Title
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class Home {
  data:string;
  // Set our default values
  localState = {value: ''};
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    this.title.getData().subscribe(data => this.data = data);
    console.log(this.data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
