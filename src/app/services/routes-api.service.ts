
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoutesApiService {
private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

  getDishesRandom(): Observable<any> {
    return this.http.get(`${this.URL}/random.php`);
  }
  getDisheId(id:number): Observable<any> {
    return this.http.get(`${this.URL}/lookup.php?i=${id}`);
  }

  searchDishes(query:string): Observable<any> {
    return this.http.get(`${this.URL}/search.php?s=${query}`);
  }
}
