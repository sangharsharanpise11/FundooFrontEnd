import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { NoteService } from 'src/app/service/note.service';
import { DataService } from 'src/app/service/DataService';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  @Input() noteData: any;
PinnedNotes:any[];
message:any;

constructor(private dataService:DataService,private noteService:NoteService,private matSnackbar:MatSnackBar,private dialog:MatDialog) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response:any)=> {
        this.message=response;
        this.getPinnedNotes();
      }
    );
  }

  getPinnedNotes(){
 this.noteService.getRequest('note/getPinnedNotes').subscribe(
   (response:any)=>{
      this.PinnedNotes=response;
  }
 )
  }

  unpin(items){
    this.noteService.putRequest('note/pin?noteId='+items.noteId,null).subscribe(
      (response:any)=>{
        if(response.statusCode==21){
          this.dataService.changeMessage(response.statusMessage);
          this.matSnackbar.open(response.statusMessage,"undo",{duration:2500});
        }
      }
    )
  }
}
