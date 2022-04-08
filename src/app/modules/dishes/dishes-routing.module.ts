import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishPageDetailComponent } from './pages/dish-page-detail/dish-page-detail.component';
import { DishPageComponent } from './pages/dish-page/dish-page.component';

const routes: Routes = [
  {
    path: '',
    component: DishPageComponent
  },
  {
    path: 'detail/:id',
    component: DishPageDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
