import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'inetum-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.scss']
})
export class PerfilPageComponent implements OnInit {

  constructor(private router: Router) { }
  us:any;
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    this.us = JSON.parse(`${user}`);
    
  }

  logout() {
    localStorage.removeItem("token-inetum");
    localStorage.removeItem("user");

    this.router.navigate(['/', 'auth'])

  }
}
