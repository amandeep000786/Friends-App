import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  private subject = new Subject<any>();
  lastMsg:string;
    sendMessage(message: string) {
        this.subject.next(message);
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
      return this.subject.asObservable();
  }


 
}
