import { Component, OnInit } from '@angular/core';
import { Upload } from '../../common/model/upload';
import { UploadService } from '../../common/service/upload.service';
import * as _ from "lodash";

@Component({
  selector: 'app-sliding-image',
  templateUrl: './sliding-image.component.html',
  styleUrls: ['./sliding-image.component.scss']
})
export class SlidingImageComponent implements OnInit {
  showForm:boolean=true;
  selectedfiles: FileList;
  currentUpload : Upload;
  uploadedFileArray:Upload[];
  successSubmit:boolean=false;
  showFlag:boolean = false; 
  deleteImg : Upload;  

  constructor(private upsvc:UploadService) {}

  ngOnInit() {
    let promise= this.upsvc.getFiles();
    promise.subscribe(items=>{
      this.uploadedFileArray=[];
      items.forEach((element, index)=>{          
         var eachItem = element.payload.toJSON();
         eachItem["$key"]=element.key;
         this.uploadedFileArray.push(eachItem as Upload);
      })
      console.log("Get Element",this.uploadedFileArray);
  })
  }

  detectChanges(event){
    this.successSubmit=false;            
    this.selectedfiles = event.target.files;
  }
  uploadSingleImage(){
     let file= this.selectedfiles[0];
     this.currentUpload = new Upload(file);
     let promise = this.upsvc.pushUpload(this.currentUpload);
  }
  uploadMutipleImages(){
    let files= this.selectedfiles;
     let fileIndex = _.range(files.length);
    _.each(fileIndex, (idx)=>{
       this.currentUpload = new Upload(files[idx]);
       this.upsvc.pushUpload(this.currentUpload);
    })
  }
  submitImage(uploadObj:Upload){
    let promise = this.upsvc.submitFileUrl(uploadObj);
    this.successSubmit=true;    
    setTimeout(()=>{
      this.successSubmit = false;  
      this.currentUpload = Object.assign({});            
    },1000)
  }
  receiveContent(event){
    if(!event)
      {
        this.showFlag= event;
      }
     else{
       this.showFlag= false;      
       this.upsvc.deleteUpload(this.deleteImg);
     }
  }
  deleteImage(obj){
    this.deleteImg =  obj;
    this.showFlag=true;
  }
}
