import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';


@Component({
  selector: 'inetum-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  isAuth = false;
  public loginForm: FormGroup = this.fb.group({
    user:[localStorage.getItem('remember-user') || ''] ,
    password:[''],
    remember:[(localStorage.getItem('remember-user')) ? true : false]
  });

  constructor( private fb: FormBuilder, 
                private authService:AuthService,
                private router:Router) { }

  

  ngOnInit(): void {
  }


  login(){

    let user = this.loginForm.get('user')?.value;
    let password = this.loginForm.get('password')?.value;

     this.authService.login({user:user, password:password}).then((res)=>{
      this.isAuth = res.code != 200 ?  true : false; 
        if(res.code == 200) {
          this.router.navigate(['/', 'welcome'])
        }
    });
    
    if(this.loginForm.get('remember')?.value){
      localStorage.setItem('remember-user', this.loginForm.get('user')?.value);
      
    }else{
      localStorage.removeItem('remember-user');

    }
        
  }

}
