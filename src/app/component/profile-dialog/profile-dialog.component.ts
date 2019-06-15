import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss']
})
export class ProfileDialogComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    
  }
 
}
