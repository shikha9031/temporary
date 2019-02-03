import { HttpService } from '../../common/service/http.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';
import { Products } from '../../common/model/product.interface';
 
 @Injectable()
 export class ProductService {

     private serviceUrl:any;
     constructor(private httpService:HttpService, private _http:Http){
         this.serviceUrl=this.httpService.getServiceUrl();
         //console.log(this.serviceUrl);
     }

    submitApp(email:string, password:string):any {
        // let headers = new Headers(); 

        // headers.append('Content-Type','application/json'); 
        // headers.append('Authorization', '1001'); 
        // let data={'email':email, 'password':password}; 
        
        // let postData={
        //          "service":"contentService",
        //          "method":"loginService",
        //          "data":data
        // };
        // return this.httpService.postServiceRequest(postData,{headers:headers}); 
    } 
    createProduct(email:string, password:string):any{     
        let headers = new Headers(); 
        headers.append('Content-Type','application/json'); 
        headers.append('Authorization', '1001');
           let loginuser={'email':email,'password':password}
           return this.httpService.postServiceRequest( this.serviceUrl+'insertdb',loginuser,headers);
       }
       submitImage(uploadData):any{
        let headers = new Headers(); 
        headers.append('Content-Type','application/json'); 
        headers.append('Authorization', '1001');
        return this.httpService.uploadImage( this.serviceUrl+'fileUpload',uploadData,headers);
       }
 } 