import {Component, ViewChild, HostListener, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'common-canvas',
  template: `
    <canvas #chessCanvas [attr.width]='size' [attr.height]='size'></canvas>
  `
})
export class CommonCanvasComponent {
  private size: number;

  @ViewChild('chessCanvas') private chessCanvas:ElementRef;

  constructor() {
    this.size = 150;
  }

  ngAfterViewInit () {
    let context: CanvasRenderingContext2D = this.chessCanvas.nativeElement.getContext("2d");
    // happy drawing from here on
    context.fillStyle = 'pink';
    context.fillRect(10, 10, 150, 150);
  }

}
