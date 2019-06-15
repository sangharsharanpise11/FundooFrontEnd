import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NoteService } from './note.service';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
      .set('Access-control-Allow-Origin', '*')
      .set('Access-control-Allow-Headers', '*')
}
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}
