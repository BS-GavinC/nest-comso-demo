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

  searchedValue : string = ''

  hasData : boolean = false;

  title : string = ''

  constructor(private readonly _wikiService : WikiService){}

  Search(){
    this.hasData = false;
    this.searchedValue = this.research
    this._wikiService.Search(this.research).subscribe({
      next : (data ) => {
        this.monthly = data
        this.hasData = true;
      }
    })
  }

}
