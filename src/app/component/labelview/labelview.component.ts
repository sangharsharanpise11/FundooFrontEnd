import { Component, OnInit, Input } from '@angular/core';
import { LabelService } from 'src/app/service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders().set('content-type', 'application/json')
      .set('Access-control-Allow-Origin', '*')
      .set('Access-control-Allow-Headers', '*')
}

@Component({
  selector: 'app-labelview',
  templateUrl: './labelview.component.html',
  styleUrls: ['./labelview.component.scss']
})
export class LabelviewComponent implements OnInit {
labelsOfNotes:any[];
@Input() noteData:any;

constructor(private labelService:LabelService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
        this.labelService.getRequest("label/getLabelOfNote?noteId="+this.noteData.noteId).subscribe(
        (response:any)=>{ this.labelsOfNotes=response;}
        )
    }
  
    deleteLabelToNote(label){         
      this.labelService.deleteRequest("label/removeFromNote?labelId="+label.labelId+"&noteId="+this.noteData.noteId).subscribe(
        (response:any)=>{
          if(response.StatusCode===21){
            this.matSnackBar.open(
            "label removed from note successfully",
            "undo",
            {duration:2500})
          }
          else{
            this.matSnackBar.open(
            "failed to remove",
            "undo",
            {duration:2500})
          }
        }
      )
      }
}
