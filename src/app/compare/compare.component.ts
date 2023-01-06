import { Component } from '@angular/core';
import { MonthlyData, WikiService, YearData } from '../wiki.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  DisponibleYears : string[] = ['2015','2016','2017','2018','2019','2020','2021','2022','2023']

  selectedYear : string = ''

  selectedValue : string[] = []

  datas : YearData[] = []

  constructor(private readonly _wiki : WikiService){}

  Search(){

    this.datas = []

    for(let value of this.selectedValue){
      this._wiki.Search(value, this.selectedYear).subscribe({
        next : (data) => {

          let evolutionDatas : MonthlyData[] = []

          let cpt = 0

          for(let d of data){

            evolutionDatas.push({
              name : d.name,
              value : cpt == 0 ? 0 : d.value - data[cpt -1].value
            })

            cpt++
          }

            this.datas.push({
              name : value,
              series : evolutionDatas
            })
        }
      })
    }


  }


}
