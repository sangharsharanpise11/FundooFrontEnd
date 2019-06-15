import { Component, OnInit } from '@angular/core';
import {  Note} from "../../model/note";
import { MatSnackBar } from '@angular/material/snack-bar';

import { Subscriber } from 'rxjs';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss']
})
export class AddnoteComponent implements OnInit {
  private popup:boolean;
  note:Note=new Note();
 
  constructor(private matSnackbar:MatSnackBar,private noteService:NoteService) { }

  ngOnInit() {
    console.log(this.note)
  }
  onPopup()
  {
    this.popup=true;
  }
onClose(){
  console.log("in close")
   this.noteService.postRequest('note/create',this.note).subscribe(
  (response:any)=>
  {
   if(response.statusCode===21){
     this.matSnackbar.open(
       
       "Note is created Successfully",
       "undo",
       
       {duration:2500}
     )
   }
   else{
     this.matSnackbar.open
       (
       "failed to create Note...",
       "undo",
       {duration:2500}
       )
     }
   }
)
this.popup=false;
}
}

