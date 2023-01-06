import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WikiService {



  constructor(private readonly _http : HttpClient) {

   }

   Search(value : string) : Observable<MonthlyData[]>{
    return this._http.get<MonthlyData[]>('http://localhost:3000/wiki/2020/' + value)
   }


}

export interface MonthlyData{
  name : string
  value : number
}

