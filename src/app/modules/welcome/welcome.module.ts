import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogWelcomeComponent } from './components/dialog-welcome/dialog-welcome.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    WelcomePageComponent,
    DialogWelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class WelcomeModule { }
