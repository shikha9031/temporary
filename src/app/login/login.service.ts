import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../common/service/http.service';


@Injectable()
export class LoginService {
    public serviceUrl;

    constructor(private httpService:HttpService) {
        this.serviceUrl=this.httpService.getServiceUrl();
    }

    fetchData(){
        let headers = new Headers(); 
        headers.append('Content-Type','application/json'); 
        headers.append('Authorization', '1001');
     
         return this.httpService.postServiceRequest( (this.serviceUrl+'getpost'),'',headers);
    }
}