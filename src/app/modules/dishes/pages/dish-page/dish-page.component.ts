import { Component, OnInit } from '@angular/core';
import { RoutesApiService } from 'src/app/services/routes-api.service';


@Component({
  selector: 'inetum-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.scss']
})
export class DishPageComponent implements OnInit {

  dishes:any;
  constructor(private routesApiService: RoutesApiService) { }

  ngOnInit(): void {
  }

  reciveData(query:string):void {
    this.routesApiService.searchDishes(query).subscribe( (res)=>{
      const { meals } = res;
      this.dishes = meals;
      console.log(this.dishes)
    })
  }
}
