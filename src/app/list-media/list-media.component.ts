import { Component, OnInit } from '@angular/core';
import {MediaService} from '../services/media.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {
  tervehdys: string;
  kaikkiMedia: any;
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.tervehdys = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe((data) => {
      this.kaikkiMedia = data;


      const kuvat = this.kaikkiMedia.map((item) => {
        const tb = item.filename.split('.')[0] + '-tn640.png';
      });

      const temp = this.kaikkiMedia[0].filename.split('.');
      console.log(temp);
      const uusiNimi = temp[0] + '-tn640.png';
      console.log(uusiNimi);
      console.log(this.kaikkiMedia);
    });
  }

}
