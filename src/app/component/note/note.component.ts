import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { AnimationDurations } from '@angular/material/core';
import { LabelService } from 'src/app/service/label.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes:any [];
  items: any;
  allLabels:any [];
  remainderData:any;
  labelsOfNotes:any [];
  unpinned:any[];
    // colors = [
  //   [
  //     { colorName: "white", colorCode: "#FFFFFF" },
  //     { colorName: "red", colorCode: "#FF0000" },
  //     { colorName: "orange", colorCode: "#FFA500" },
  //     { colorName: "yellow", colorCode: "#FFFF00" },
  //   ],
  //   [
  //     { colorName: "green", colorCode: "#008000" },
  //     { colorName: "teal", colorCode: "#008080" },
  //     { colorName: "blue", colorCode: "#0000FF" },
  //     { colorName: "dark blue", colorCode: "#0000A0" },
  //   ],
  //   [
  //     { colorName: "purple", colorCode: "#800080" },
  //     { colorName: "pink", colorCode: "#FFC0CB" },
  //     { colorName: "brown", colorCode: "#A52A2A" },
  //     { colorName: "gray", colorCode: "#A9A9A9" },
  //   ]
  //   ]

  constructor(private labelService:LabelService,private noteService:NoteService,private matdialog:MatDialog,private httpService:HttpService,private matSnackBar:MatSnackBar) { }

  ngOnInit() {
    this.noteService.getRequest('note/getAllNotes').subscribe((response:any)=>{
      this.notes=response;
      console.log(this.notes)
    })
   // this. getLabels();
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

//   getUnPinned() {
//     this.noteService.getRequest('note/getunpinnednotes').subscribe(
//       (response: any) => {
//         this.unpinned = response;
//         console.log(response);
//       }
//     )
//   }
// //   deletenote(items):void{
//   console.log("noteid :",this.items);
//     this.noteService.putRequest('note/trash?noteId='+items.noteId,null).subscribe(
//       (response: any) => {
//         if (response.statusCode === 21) {
//         console.log(response);
//           this.matSnackBar.open(
//             "Note trashed successfully",
//              "undo", 
//              { duration: 2500 } );
//         }
//         else{
//           this.matSnackBar.open(
//             "failed to trash",
//             "undo",
//             {duration:2500}
//           )
//         }
//       }
//     );
    
//   }

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
//   
//   
// //  getLabelOfNotes(){
// //    this.remainderData.getRequest("label/getLabelOfNote?noteId="+this.items.noteId).subscribe(
// //      (response:any)=>{ this.labelsOfNotes=response;}
// //      )
// //  }
//   getLabels(){

//     this.labelService.getRequest('label/getlabel').subscribe(
//       (response:any)=> {
//         console.log("Labels are got")
//         console.log(response)
//         this.allLabels=response;
//       }
//     )
//   }
//   onEvent(event) {
//     event.stopPropagation();
//   }
//   // http://localhost:9090/user/label/addLabelToNote?la…lId=%22+label.labelId+%22&noteId=%22+notes.noteId", ok: false, …}
//   // http://localhost:9090/user/label/addLabelToNote?labelId=57&noteId=45
//   addLabelToNote(labelId,items) {
//    // console.log(labelId);
//      this.labelService.putRequest("label/addLabelToNote?labelId="+labelId+"&noteId="+items.noteId,null).subscribe(
//      (response:any)=>
//      {
//       if(response.statusCode===21){
//         this.matSnackBar.open(
//           "label added to note successfully",
//           "undo",
//           {duration:2500}
//         )
//       }
//       else{
//         this.matSnackBar.open(
//           "failed to add label",
//           "undo",
//           {duration:2500}
//         )
//       }
//      }
//     )
//     }
//   deleteLabelToNote(items,label){
//     this.labelService.deleteRequest("label/removeFromNote?labelId="+label.labelId+"&noteId="+items.noteId).subscribe(
//       (response:any)=>{
//         if(response.statusCode===21)
//         {
//           this.matSnackBar.open(
//             "deleted successfully",
//             "undo",
//             {duration:2500}
//           )
//         }
//       }
//     )
//   }
//   reminder(){
//     this.remainderData={
//       id:this.items.noteId,
//    }
//   }
//   todayReminder(){
//     let currentDate=new Date();
//     this.remainderData={
//     reminder: currentDate.toISOString() }

// this.noteService.postRequest("note/setRemainder?noteId="+this.items.noteId+"&time="+this.reminder,null).subscribe(
//   (response:any)=>{
//     if(response.statusCode===21)
//     {
//       this.matSnackBar.open(
//         "reminder set successfully",
//         "undo",
//         {duration:2500}
//       )
//     }
//     else{
//       this.matSnackBar.open(
//         "failed to set reminder",
//         "undo",
//         {duration:2500}
//       )
//     }
//   }
// )
//   }
}
