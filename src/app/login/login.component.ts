import { Component, OnInit } from '@angular/core';
import { LoginClass } from '../common/module/login.interface';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

//import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
 public msg:string="";
 public flag:boolean=false;
 public loginObject= new LoginClass();
 
  constructor(private _router:Router, private loginService:LoginService) { }

  ngOnInit() {
  }
onClick(){
  if(this.loginObject.name!="shikha@gmail.com"||this.loginObject.password!="12345")
    {
      this.flag=true;
      this.msg="username or password is incorrect";
    }
  else
      {
        if(this.loginObject.name=="shikha@gmail.com" && this.loginObject.password=="12345"){
         let res= this.loginService.fetchData();
        // console.log(res);
        res.then(data=>{
          console.log(data);
        })
          this._router.navigate(['./home']);
        }
      }
}
countdigit(){
 // console.log(this.loginObject.name.length);
}
}
