import{ROUTES, Router}from '@angular/router';
import { Component,OnInit } from "@angular/core";

@Component
({
    selector:'add-comp',
    templateUrl:'addproduct.html'
})

export class AddProductComponent 
{


proId:any;
proName:any;
proCost:any;
proOnline:any;
proCate:any;
proStore1:any;




proAll:any[]=[];
Abc:any=document.getElementsByName("Course");
avaliable:any="";



addData():any{

    this.avaliable="";
    for(let data of this.Abc)
    {
        if(data.checked)
        {
            this.avaliable=this.avaliable+"/"+data.value;
        }
    }
    
    this.proStore1
   this.proAll.push({proId:this.proId,proName:this.proName,proCost:this.proCost,proOnline:this.proOnline,proCate:this.proCate,proStore1:this.avaliable});

   

}
reset():any{

    this.proId="";
    this.proName="";
    this.proCost="";
    this.proOnline="";
    this.proCate="";
    this.proStore1="";
}
}