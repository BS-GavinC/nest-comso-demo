import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  monthly : MonthlyData[] = []

  constructor(private readonly _http : HttpClient) {
    this._http.get<MonthlyData[]>('http://localhost:3000/wiki/2015/Donald_Trump').subscribe({
      next : (data) => {
        this.monthly = data
      }
    })
   }
}

export interface MonthlyData{
  name : string
  value : number
}
