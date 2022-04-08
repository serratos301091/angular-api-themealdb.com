import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { AuthPageComponent } from '@modules/auth/pages/auth-page/auth-page.component';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';
import { NotFaundPageComponent } from '@shared/pages/not-faund-page/not-faund-page.component';

const routes: Routes = [


  {
    path:'',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m=>m.HomeModule),
    canActivate:[SessionGuard]
  },

  {
    path:'auth',
    component: AuthPageComponent,
    loadChildren: () => import(`./modules/auth/auth.module`).then(m=>m.AuthModule)

  },

  {
    path:'**',
    component: NotFaundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
