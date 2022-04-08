import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'inetum-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {


  linksMenu: Array<any> = [
    {
      name: 'Welcome', 
      icon: 'uil-estate',
      router: ['/welcome']
    },
    {
      name: 'Ingredientes', 
      icon: 'uil-crockery',
      router: ['/', 'ingredients']

    },
    {
      name: 'Platillos', 
      icon: 'uil-pizza-slice',
      router: ['/', 'dishes']

    },
    {
      name: 'Perfil', 
      icon: 'uil-user',
      router: ['/', 'perfil']

    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  

}
