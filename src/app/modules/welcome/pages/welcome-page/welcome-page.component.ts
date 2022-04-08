import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogWelcomeComponent } from '@modules/welcome/components/dialog-welcome/dialog-welcome.component';
import { RoutesApiService } from 'src/app/services/routes-api.service';


@Component({
  selector: 'inetum-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog, private routesApiService: RoutesApiService) { }
  ngOnInit(): void {
    this.routesApiService.getDishesRandom().subscribe( (resp)=>{
      const { meals} = resp
      const { idMeal, strMeal, strMealThumb } = meals[0];
      this.openDialog(idMeal, strMeal, strMealThumb);

    })
  }

  openDialog(idMeal:any, strMeal:any, strMealThumb:any) {
    const dialogRef = this.dialog.open(DialogWelcomeComponent,{
      data: {id:idMeal, title:strMeal , img: strMealThumb}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
