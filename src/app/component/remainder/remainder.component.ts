import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-remainder',
  templateUrl: './remainder.component.html',
  styleUrls: ['./remainder.component.scss']
})
export class RemainderComponent implements OnInit {
 notes : any[];

  constructor(private noteService:NoteService) { }

  ngOnInit() {
    
  }

  getAllNotes(){
    this.noteService.getRequest('note/getAllNotes').subscribe(
      (response:any)=>{
        this.notes=response;
      }
    )
  }
}
