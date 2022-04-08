import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  response = 
    { 
      user:{
        name:'Alberto',
        lastName:'Serratos',
        email:'serratos103091@.com',
        user:'root'
      },
        token: '7k81ardn37g',
        code:200
      
    }
    
    
  
  
   async login( formdata:{user:string, password:string}){

    if(formdata.user == 'user' && formdata.password == 'root'){
      let res =  await this.response;
      localStorage.setItem('token-inetum', res.token);
      localStorage.setItem('user', JSON.stringify(res.user))
      return res;
    } else {
      return {message:'Tus credenciales son invalidas', code:401}
    }

  }


}


