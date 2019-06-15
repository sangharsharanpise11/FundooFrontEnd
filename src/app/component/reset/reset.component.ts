import { Component, OnInit } from '@angular/core';
import { Reset } from 'src/app/model/reset';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
reset:Reset=new Reset();
resetForm:FormGroup;
token:string;

constructor(private httpService:HttpService,private snackBar:MatSnackBar, private route : ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
 this.resetForm=this.formBuilder.group(
   {
    'newPassword':new FormControl(this.reset.newPassword, [Validators.required, Validators.minLength(6)]),
    'confirmPassword':new FormControl(this.reset.confirmPassword, [Validators.required, Validators.minLength(6)])
  }
 )
//  this.token = this.route.snapshot.paramMap.get('token');
 
 this.token=localStorage.getItem('token')
 console.log("token :"+this.token);
  }
onResetPassword()
{
  if(this.reset.newPassword !=this.reset.confirmPassword)throw "Password and Confirm Password does not match";
  if(this.reset.newPassword===''||this.reset.confirmPassword==='')throw "fields are Empty";
  console.log(this.resetForm.value);

  this.httpService.putRequest("resetPassword/"+this.token,this.resetForm.value).subscribe(
  (response:any)=>{
    if(response.statusCode===5)
    {
      console.log(response);
      localStorage.setItem('token',response.token);
      this.snackBar.open(
      "passsword reset successfully",
      "undo",
      {duration : 2500}
      )
      this.router.navigate(['/login'])
    }
    else{
      this.snackBar.open(
      "failed to reset",
      "undo",
      {duration : 2500}
      )
    }
  }
  )
  
}
}