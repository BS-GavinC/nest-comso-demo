import { Component } from '@angular/core';
import { MonthlyData, WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  research : string = ''

  monthly : MonthlyData[] = []



  title : string = ''

  constructor(private readonly _wikiService : WikiService){}

  Search(){
    this._wikiService.Search(this.research).subscribe({
      next : (data ) => {
        this.monthly = data
      }
    })
  }

}
