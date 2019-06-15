import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-collabrator-dialog',
  templateUrl: './collabrator-dialog.component.html',
  styleUrls: ['./collabrator-dialog.component.scss']
})
export class CollabratorDialogComponent implements OnInit {
@Input() noteData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CollabratorDialogComponent>,private matSnackBar:MatSnackBar,private noteService:NoteService) { }
 
  note:any;
  noteId=this.noteData.noteId;
  
  ngOnInit() {
  }

}
