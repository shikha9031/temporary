import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;

@Component({
    selector: 'pagination-component',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})

export class PaginationComponent implements OnInit {
    /**
  * pagination
  */
    pageArray:any;
    totalPages:any;
    selectedPage: any = 1;
    showArray=[];
    @Output() PageNo = new EventEmitter();
    @Input() data;
    constructor() { }

    ngOnInit() { 
        if(this.data){
            this.totalPages=this.data.totalPages;
            this.pageArray= this.data.pageArray;
            this.sendValueToParent(this.selectedPage);
        }
    }
    preNextpage(param: any, arr: any, page: any) {
        if (param == 'pre') {
            if (arr[0] > 1 && this.selectedPage == arr[0]) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i] - 1;
                }
                this.selectedPage = this.selectedPage - 1;
            }
            else if (arr[0] > 1 && this.selectedPage > arr[0]) {
                this.selectedPage = this.selectedPage - 1;
            }
        }
        else if (param == '') {
            this.selectedPage = page;
        }
        else if (param == 'next') {
            if (arr[arr.length - 1] < this.totalPages && this.selectedPage == arr[arr.length - 1]) {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i] + 1;
                }
                this.selectedPage = this.selectedPage + 1;
            }
            else if (arr[arr.length - 1] < this.totalPages && this.selectedPage < arr[arr.length - 1]) {
                this.selectedPage = this.selectedPage + 1;
            }
        }
        this.sendValueToParent(this.selectedPage);        
    }
    sendValueToParent(param) 
    {
        this.showArray= this.data.productArray.slice((param-1) * this.data.itemsPerPage , param*this.data.itemsPerPage);        
        this.PageNo.emit(this.showArray);
    }
}