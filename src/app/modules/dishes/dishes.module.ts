import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishPageComponent } from './pages/dish-page/dish-page.component';
import { DishPageDetailComponent } from './pages/dish-page-detail/dish-page-detail.component';
import { SearchComponent } from './components/search/search.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    DishPageComponent,
    DishPageDetailComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DishesRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class DishesModule { }
