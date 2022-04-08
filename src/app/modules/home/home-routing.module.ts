import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'ingredients',
    loadChildren: () => import(`@modules/ingredients/ingredients.module`).then(m=>m.IngredientsModule)
  },
  {
    path:'dishes',
    loadChildren: () => import(`@modules/dishes/dishes.module`).then(m=>m.DishesModule)
  },
  {
    path:'welcome',
    loadChildren: () => import(`@modules/welcome/welcome.module`).then(m=>m.WelcomeModule)
  },

  {
    path:'perfil',
    loadChildren: () => import(`@modules/perfil/perfil.module`).then(m=>m.PerfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
