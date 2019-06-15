import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/service/label.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Label } from 'src/app/model/label';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
labels:any[];
label:Label=new Label();
labelName = new FormControl('');

  constructor(private labelService:LabelService,private matSnackBar:MatSnackBar,private matDialog:MatDialog) { }

  ngOnInit() {
    this.labelService.getRequest('label/getlabel').subscribe(
      (response:any)=>{
        this.labels=response;
        console.log(response);
      }
    )
  }
  onDone(){
    this.label = {
      "labelName": this.labelName.value
    };
  this.labelService.postRequest('label/createLabel',this.label).subscribe(
    (response:any)=>{
      if(response.statusCode===21)
      {
        this.matSnackBar.open(
          "label created successfully",
          "undo",
          {duration:2500}
        )
      }
      else{
        this.matSnackBar.open(
          "failed to create label",
          "undo",
          {duration:2500}
        )
      }
    }
  )
}
updateLabel(items){
  this.label = {
    "labelName": this.labelName.value
   };
  this.labelService.putRequest('label/updateLabel?labelId='+items.labelId,this.label).subscribe(
    (response:any)=>{
      if(response.statusCode===21)
      {
        this.matSnackBar.open(
          "label updated successfully",
          "undo",
          {duration:2500}
        )
      }
      else{
        this.matSnackBar.open(
          "failed to update label",
          "undo",
          {duration:2500}
        )
      }
    }
  )
}
deleteLabel(items){
  console.log(items.labelId);
  this.labelService.deleteRequest('label/deleteLabel?labelId='+items.labelId).subscribe(
    (response:any)=>{
      if(response.statusCode===21)
      {
        this.matSnackBar.open(
          "label deleted successfully",
          "undo",
          {duration:2500}
        )
      }
      else{
        this.matSnackBar.open(
          "failed to delete label",
          "undo",
          {duration:2500}
        )
      }
    }
  )
}
}
