import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
    selector: 'clock',
    encapsulation: ViewEncapsulation.None,
    styles: [require('./clock.scss')],
    template: require('./clock.html')
})
export class Clock {

    constructor() {
setInterval(() => this.start(), 1000);
    }
    public currentDate;
    public currentHours;
    public currentMinutes;
    public currentSeconds;

    public hours = [];
    public minutes = [];
    public seconds = [];
    updateDate() {
  this.currentDate = new Date();
  this.currentHours = this.currentDate.getHours();
  if (this.currentHours < 10) {
    this.currentHours = '0' + this.currentHours;
  }
  this.currentMinutes = this.currentDate.getMinutes();
  if (this.currentMinutes < 10) {
    this.currentMinutes = '0' + this.currentMinutes;
  }
  this.currentSeconds = this.currentDate.getSeconds();
  if (this.currentSeconds < 10) {
    this.currentSeconds = '0' + this.currentSeconds;
  }
}
splitDigits(stringVal, array) {
  var tempString = stringVal.toString();
  array.length = 0
  for (var i = 0; i < tempString.length; i++) {
    array.push(+tempString.charAt(i));
  }
}
printClass(value, elem) {
  elem.attr('class', 'digit').addClass('t-' + value);
}
start(){
  this.updateDate();
  this.splitDigits(this.currentSeconds, this.seconds);
  this.splitDigits(this.currentMinutes, this.minutes);
  this.splitDigits(this.currentHours, this.hours);

  this.printClass(this.hours[0], $('.hours .digit:first-of-type'));
  this.printClass(this.hours[1], $('.hours .digit:last-of-type'));
  this.printClass(this.minutes[0], $('.minutes .digit:first-of-type'));
  this.printClass(this.minutes[1], $('.minutes .digit:last-of-type'));
}
}
