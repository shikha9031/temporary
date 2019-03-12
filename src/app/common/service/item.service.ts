import { Injectable } from '@angular/core';
import { Items } from '../model/items.interface';

@Injectable()

export class ItemsService {
 itemobj = new Items();

    public setValue(param){
      this.itemobj = param;
    }
    public getValue(){
        return this.itemobj;
    } 
}