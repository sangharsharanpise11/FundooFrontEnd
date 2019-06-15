import { Component, OnInit } from '@angular/core';
import { Forgot } from 'src/app/model/forgot';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
forgot:Forgot=new Forgot();
forgotForm:FormGroup;
  
constructor(private snackBar:MatSnackBar,private httpService:HttpService,private formBuilder:FormBuilder) { }

ngOnInit() {
  this.forgotForm=this.formBuilder.group(
    {
      'emailId': new FormControl(this.forgot.emailId, Validators.required)
    }
  )
 }

onForgot(){
  console.log(this.forgotForm.value);
  this.httpService.postRequest('forgot',this.forgotForm.value).subscribe(
    (response:any)=>{
      if(response.statusCode===3)
      {
        console.log(response);
        this.snackBar.open(
          "link send to user Successfully",
          "undo",
          { duration: 2500 }
        )
      }
      else{
        console.log(response);
        this.snackBar.open(
          "invalid emailId",
          "undo",
          { duration: 2500 }
        )
      }
    }
  );
  }
   }
