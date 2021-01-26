import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageServiceService } from '../message-service.service';
import * as data from '../json/messagesjson.json';
@Component({
  selector: 'app-chat-screen', 
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements OnInit {
  // {id: number, message: string,timestamp:number,isReceiver:boolean}
  chatJsonArr: Array<any> = (data as any).default;

  subscription: Subscription;
  messageval:string;
  now:number;
  chatid:string;
  constructor(private messageService:MessageServiceService,private route:ActivatedRoute) { 

    this.route.params.subscribe(routeParam => {
      this.chatid=routeParam.id
    });
  }

  
  ngOnInit(): void {
   
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.chatJsonArr.forEach(element => {
          if(element.chatid==this.chatid){
            let lastid=element.chatarr[element.chatarr.length-1].id;
            this.now = new Date().getTime();  
            element.chatarr.push({id:lastid+1,message:message,timestamp:this.now,isReceiver:true});
            this.messageval="";
           
          }
        });
      } 
    });
  }
  
 
  
  sendMessage(){
      this.messageService.sendMessage(this.messageval);
    
  }
 
}
