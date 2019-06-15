import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
notes:any[];
//note:any;

  constructor(private noteService:NoteService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
 
    this.noteService.getRequest('note/getTrashNotes').subscribe(
      (response:any)=>{
      this.notes=response;
     console.log(response);
     console.log("trashed notes are :"+this.notes);
      }
    )
  }
  deletePermenently(items){                                        
    console.log("Delete forever" + items.noteId);
  this.noteService.deleteRequest('note/deletePermenently?noteId='+items.noteId).subscribe(
   (response:any)=>{
     if(response.statusCode===21){
       this.matSnackBar.open(
         "Note deleted Permenently",
         "undo",
         {duration:2500}
       )
       console.log("deleted note is :"+items.noteId)
     }
     else{
       this.matSnackBar.open(
         "failed to delete",
         "undo",
         {duration:2500}
       )
     }
   }
 )
 }

 restore(items){
  console.log("restored note" + items.id);
  this.noteService.putRequest('note/trash?noteId='+items.noteId,null).subscribe(
    (response: any) => {
      if (response.statusCode === 21)
      {
      console.log(response);
        this.matSnackBar.open(
          "Note restored successfully",
           "undo", 
           { duration: 2500 } );
           console.log("restored note is :"+items.noteId)
      }
      else{
        this.matSnackBar.open(
          "failed to restore",
          "undo",
          {duration:2500}
        )
      }
    }
  );
}
}