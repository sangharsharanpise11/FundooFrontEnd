import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
notes:any[];
items: any;

colors = [
  [
    { colorName: "white", colorCode: "#FFFFFF" },
    { colorName: "red", colorCode: "#FF0000" },
    { colorName: "orange", colorCode: "#FFA500" },
    { colorName: "yellow", colorCode: "#FFFF00" },
  ],              
  [
    { colorName: "green", colorCode: "#008000" },
    { colorName: "teal", colorCode: "#008080" },
    { colorName: "blue", colorCode: "#0000FF" },
    { colorName: "dark blue", colorCode: "#0000A0" },
  ],
  [
    { colorName: "purple", colorCode: "#800080" },
    { colorName: "pink", colorCode: "#FFC0CB" },
    { colorName: "brown", colorCode: "#A52A2A" },
    { colorName: "gray", colorCode: "#A9A9A9" },
  ]
  ]

  constructor(private noteService:NoteService,private matSnackBar:MatSnackBar,private matdialog:MatDialog) { }

  ngOnInit() {
    this.noteService.getRequest('note/getArchiveNotes').subscribe(
      (response:any)=>{
       this.notes=response;
       console.log(response);
     }
    )
  }
  openDialog(items): void {
    
    const dialogRef = this.matdialog.open(DialognoteComponent, {
      width: '600px', height: '230px',
      data: {
        title: items.title,
        description: items.description,
        noteId: items.noteId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deletenote(items):void{
    console.log("noteid :",this.items);
      this.noteService.putRequest('note/trash?noteId='+items.noteId,null).subscribe(
        (response: any) => {
          if (response.statusCode === 21) {
          console.log(response);
            this.matSnackBar.open(
              "Note trashed successfully",
               "undo", 
               { duration: 2500 } );
          }
          else{
            this.matSnackBar.open(
              "failed to trash",
              "undo",
              {duration:2500}
            )
          }
        }
      );
      
      }
  
    pin(items):void{
      console.log("note",this.items)
      this.noteService.putRequest('note/pin?noteId='+items.noteId,null).subscribe(
        (response:any)=>{
          if(response.statusCode===21){
            this.matSnackBar.open(
            "pinned note successfully",
            "undo",
            {duration:2500});
          }
          else{
            this.matSnackBar.open(
              "failed to pin",
              "undo",
              {duration:2500}
            )
          }
        }
      )
    }
    unarchive(items):void{
      this.noteService.putRequest('note/archive?noteId='+items.noteId,null).subscribe(
        (response:any)=>{
          if(response.statusCode===21){
            this.matSnackBar.open(
            "UnArchived note successfully",
            "undo",
            {duration:2500}
             ) }
             else 
             {
               this.matSnackBar.open(
                 "failed to Archive",
                 "undo",
                 {duration:2500}
               )
             }
        }
      )
    }
    changeColor(items):void{
      this.noteService.putRequest('note/setColor?noteId='+items.noteId,null).subscribe(
        (response:any)=>{
          if(response.statusCode===21)
          {
            this.matSnackBar.open(
              "color set successfully",
              "undo",
              {duration:2500}
            )
          }
          else{
            this.matSnackBar.open(
              "failed to set color",
              "undo",
              {duration:2500}
            )
          }
        }
      )
    }
}
