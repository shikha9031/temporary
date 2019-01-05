import { Component } from '@angular/core';
import { LoginClass } from '../../common/module/login.interface';
import { addUserService } from './adduser.service'

@Component({
  selector: 'adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AddUserComponent {
  
  loginClassObject=new LoginClass();
  email:string='';
  password:string='';
  selectedFile: File;

  
constructor( private appServiceObject:addUserService ){}
   login(){
       if(this.email=='' || this.password=='')
        {
          alert("please fill both");
        }
        else
          {
            let res;
            res=this.appServiceObject.submitApp(this.email, this.password);
            res.then(data=>{
                console.log(data);
            
            });
             
          }
   }
   uploadImage(event){
    //const file = event.target.files[0];
    this.selectedFile=event.target.files[0];
   // console.log(this.selectedFile);
   }
   uploadSelectedFile(){
     const uploadData = new FormData();
    // uploadData.append(this.selectedFile);
    let res= this.appServiceObject.submitImage(this.selectedFile);
    // res.then(data=>{
    //   console.log(data);
    // }).catch(error=>{
    //   console.log(error);
    // });
   }
}