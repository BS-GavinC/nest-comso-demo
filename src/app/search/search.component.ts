import { Component } from '@angular/core';
import { MonthlyData } from '../wiki.service';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  DisponibleYears : string[] = ['2015','2016','2017','2018','2019','2020','2021','2022','2023']

  selectedYear : string = '2022'

  research : string = ''

  monthly : MonthlyData[] = []

  searchedValue : string = ''

  hasData : boolean = false;

  constructor(private readonly _wikiService : WikiService){}

  Search(){

    this.hasData = false;
    this.searchedValue = this.research

    this._wikiService.Search(this.research, this.selectedYear).subscribe({
      next : (data ) => {
        this.monthly = data
        this.hasData = true;
      }
    })

  }
}
