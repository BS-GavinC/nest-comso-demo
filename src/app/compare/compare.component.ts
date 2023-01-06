import { Component } from '@angular/core';
import { MonthlyData, WikiService, YearData } from '../wiki.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  DisponibleYears : string[] = ['2015','2016','2017','2018','2019','2020','2021','2022','2023']

  selectedYear : string = '2022'

  selectedValue : string[] = []

  datas : YearData[] = []

  ErrorMessage : string = ''

  constructor(private readonly _wiki : WikiService){}

  Search(){

    this.ErrorMessage = ''
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
        },
        error : (err) => {
          console.log(err);
          this.ErrorMessage = err.error.message ? err.error.message + ' : ' + value : 'Serveur injoignable'


          // switch (err.status) {
          //   case 404:
          //     this.ErrorMessage = err.error.message

          //     break;
          //   case 0:
          //     this.ErrorMessage = err.message
          //     break
          //   default:
          //     break;
          // }
        }
      })
    }


  }


}
