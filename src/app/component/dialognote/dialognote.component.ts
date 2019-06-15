import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/note.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Note } from 'src/app/model/note';

@Component({
  selector: 'app-dialognote',
  templateUrl: './dialognote.component.html',
  styleUrls: ['./dialognote.component.scss']
})
export class DialognoteComponent implements OnInit {
 // @Input() noteData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialognoteComponent>,private matSnackBar:MatSnackBar,private noteService:NoteService) { }

  note: any;
  title = new FormControl(this.data.title);
  description = new FormControl(this.data.description);
  id =( this.data.noteId);
   //noteVal:Note=new  Note();
  ngOnInit() {
   // console.log("Data "+this.noteVal) 
       console.log(this.data);
    
  }

  updateNote(items) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    this.note = {
      "title": this.title.value,
      "description": this.description.value
    }
    this.noteService.putRequest("note/update?noteId=" + this.id, this.note).subscribe(
      (response: any) => {
        if (response.statusCode === 21) {
          console.log("details :"+this.note);
          this.matSnackBar.open(
            "Note updated successfully",
             "undo", 
             { duration: 2500 } );
        } else
         {
          this.matSnackBar.open(
            "Note updation failed",
             "undo",
              { duration: 2500 });
        }           
      }
    );
    this.dialogRef.close();
  }
 
}

