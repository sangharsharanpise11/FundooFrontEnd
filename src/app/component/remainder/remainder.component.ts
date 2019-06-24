import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
reminderedNotes : any[];
@Input() noteData:any;

  constructor(private noteService:NoteService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
 
    this.noteService.getRequest('note/getRemainderNotes').subscribe(
      (response:any)=>{
        this.reminderedNotes=response;
        console.log("in remainder notes :"+this.reminderedNotes)
      }
    )
  }
 
  deleteReminder(items){
    this.noteService.deleteRequest('note/deleteRemainder?noteId='+items.noteId).subscribe(
      (response:any)=>{
        if(response.statusCode===21){
          this.matSnackBar.open(
            "reminder deleted successfully","undo",{duration:2500}
          )
        }
      }
    )
  }
}
