import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { MessageServiceService } from '../message-service.service';
import * as data from '../json/messagesjson.json';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})

export class ChatsComponent implements OnInit {
  chatJsonArr: Array<any> = (data as any).default;
  lastMsg:string;
  timestamp:number;
      constructor(private messageService:MessageServiceService,private router:Router) { 
     
      }

      ngOnInit(): void {
  
        
      }

      getLastMessage(chatid:string):string{

        for(var i=0;i<this.chatJsonArr.length;i++){
          console.log(this.chatJsonArr[i].chatid)
          if(this.chatJsonArr[i].chatid == chatid){
                
            this.lastMsg=this.chatJsonArr[i].chatarr[this.chatJsonArr[i].chatarr.length-1].message;
            console.log("lastmsg"+this.lastMsg)
            return this.lastMsg;
          }
        }
      }

      getLastTimeStamp(chatid):number{
        for(var i=0;i<this.chatJsonArr.length;i++){
          console.log(this.chatJsonArr[i].chatid)
          if(this.chatJsonArr[i].chatid == chatid){
                
            this.timestamp=this.chatJsonArr[i].chatarr[this.chatJsonArr[i].chatarr.length-1].timestamp;
           console.log("tim"+this.timestamp)
            return this.timestamp;
          }
        }
      }

      getbackgdimgurl(chatid):string{
        for(var i=0;i<this.chatJsonArr.length;i++){
          if(this.chatJsonArr[i].chatid == chatid){
  
            return  `background-image:url(${this.chatJsonArr[i].avatar})`
          }
        }

      }


  

}
