import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  get datas(){
    return this._wikiService.monthly
  }

  title : string = ''

  constructor(private readonly _wikiService : WikiService){}


}
