import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

   @Input() showModalFlag:boolean;
   @Output() emitContent = new EventEmitter();
  constructor(){ }

  ngOnInit() {
    if(!this.showModalFlag){
       this.showModalFlag=false;
    }
  }
  modalFun(param){
     if(param=='cancel')
     {
      this.showModalFlag=false;                          
      this.emitContent.emit(this.showModalFlag);
    }
     else if(param=='ok'){
      this.showModalFlag=true;                    
      this.emitContent.emit(this.showModalFlag);
    }
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
