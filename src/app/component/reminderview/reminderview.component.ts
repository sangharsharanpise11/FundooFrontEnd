import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-reminderview',
  templateUrl: './reminderview.component.html',
  styleUrls: ['./reminderview.component.scss']
})
export class ReminderviewComponent implements OnInit {
@Input() noteData:any;
reminderOfNotes:any[];

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.noteService.getRequest("note/getRemainderNotes"+this.noteData.noteId).subscribe(
      (response:any)=>{ this.reminderOfNotes=response;}
      )
  }

}
