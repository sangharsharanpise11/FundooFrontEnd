import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/DataService';
import { FormControl, Validators } from '@angular/forms';
import { Collaborator } from 'src/app/model/collaborator';

@Component({
  selector: 'app-collabrator-dialog',
  templateUrl: './collabrator-dialog.component.html',
  styleUrls: ['./collabrator-dialog.component.scss']
})
export class CollabratorDialogComponent implements OnInit {
  @Input() noteData: any;

  firstName: String;
  lastName: String;
  collaboratorUsers: any[];
  message: any;
  emailId:String;

  constructor(private matdialog:MatDialog,private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<CollabratorDialogComponent>, private matSnackBar: MatSnackBar, private noteService: NoteService) { }
 
  collaborator:Collaborator=new Collaborator();

  ngOnInit() {
    this.emailId=localStorage.getItem('emailId');
    console.log(this.emailId);
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.getCollabUser();
      }
    );
  }

  getCollabUser() {
    console.log(this.data.noteId);
    this.noteService.getRequest('note/getAllCollaboratedUser?noteId='+this.data.noteId).subscribe(
      (response: any) => {
        this.collaboratorUsers = response;
        console.log("collaborated users:"+this.collaboratorUsers);
        console.log("noteid :"+this.data.noteId);
      }
    )
  }

  deleteCollaborator(emailId) {
    this.noteService.deleteRequest("note/deleteCollaborator?emailId="+emailId+"&noteId="+this.data.noteId).subscribe(
      (response: any) => {
        if (response.statusCode === 21) {
          this.matSnackBar.open(
            "collaborator deleted successfully", "undo", { duration: 2500 }
          )
        }
      }
    )
  }
  addCollaborator() {           //note/addCollaborator?emailId=khera%40gmail.com&noteId=
    this.noteService.postRequest("note/addCollaborator?emailId="+this.collaborator.emailId+"&noteId="+this.data.noteId, null).subscribe(
      (response: any) => {
        if (response.statusCode === 21) {
          this.matSnackBar.open(
            "user collaborated ","undo",{duration:2500}
          )
        }
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
}
