import { Component, OnInit } from "@angular/core";
import { BaiduMap, OfflineOptions, ControlAnchor, NavigationControlType } from "angular2-baidu-map";

@Component({
  selector: 'common-baidu',
  template: `
        <h1>Test Baidu-Map<h1>
        <baidu-map ak="Bbfmdfi8FAU0vHCDDkl1gLxP" [options]="opts" [offline]="offlineOpts" (onMapLoaded)="loadMap($event)" (onMarkerClicked)="clickMarker($event)"></baidu-map>
    `,
  styles: [`
        baidu-map{
            width: 1000px;
            height: 1000px;
            display: block;
        }
    `],
  directives: [BaiduMap]
})
export class CommonBaiduComponent implements OnInit {

  opts: any;
  offlineOpts: OfflineOptions;

  ngOnInit() {
    this.opts = {
      center: {
        longitude: 121.506191,
        latitude: 31.245554
      },
      zoom: 17,
      markers: [{
        longitude: 121.506191,
        latitude: 31.245554,
        title: 'Where',
        content: 'Put description here'
      }],
      geolocationCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
      },
      scaleCtrl: {
        anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
      },
      overviewCtrl: {
        isOpen: true
      },
      navCtrl: {
        type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
      }
    };

    this.offlineOpts = {
      retryInterval: 5000,
      txt: 'NO-NETWORK'
    };
  }

  loadMap(map: any) {
    console.log('map instance here', map);
  }

  clickMarker(marker: any){
    console.log('The clicked marker is', marker);
  }
}
