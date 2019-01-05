import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService{
    public serviceUrl="http://localhost:3000/";
     constructor( private http:HttpClient ) {   

     }
   getServiceUrl(){
       return this.serviceUrl;
   }
   postServiceRequest(url, params:any, headers:any){
 
          return this.http.post(url, params, headers, ).toPromise().then(res=>{
             return res;
          }).catch(this.handleError);

   }
   uploadImage(url, params:any, headers:any){
     var form = new FormData();
     //form.append('file':params.)
     console.log(params.file);
   }
   
   private handleError(error:any):Promise<any>{
       console.error("Error Occurred",error);
       return Promise.reject(error.message|| error);
   }

}

