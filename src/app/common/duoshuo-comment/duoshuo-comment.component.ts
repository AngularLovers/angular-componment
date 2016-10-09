import { Component, OnInit, ElementRef, Renderer } from "@angular/core";
import { RebirthWindow } from "./../../../window";

@Component({
  selector: 'duoshuo-comment',
  providers: [RebirthWindow],
  template: require('./duoshuo-comment.html')
})
export class DuoShuoCommentComponent implements OnInit {
  private duoShuoUrl: string;
  private key:number;

  constructor(private elmRef: ElementRef, private renderer: Renderer, private rebirthWindow: RebirthWindow) {
    let protocol = this.rebirthWindow.getOwnerDocument(this.elmRef).location.protocol === 'https:' ? 'https:' : 'http:';
    this.duoShuoUrl = `${protocol}//static.duoshuo.com/embed.js`;
    this.rebirthWindow.getGlobalObject().duoshuoQuery = {short_name: "xiaomoblog"};
    this.key = Math.random();
  }

  ngOnInit() {
    let duoshuoElm = this.elmRef.nativeElement.querySelector('.ds-thread');

    this.rebirthWindow.createScript(`${this.duoShuoUrl}?rn=${Math.random()}`,
      this.renderer, this.elmRef, () => {
        this.rebirthWindow.getGlobalObject().DUOSHUO.EmbedThread(duoshuoElm);
      });
  }
}
