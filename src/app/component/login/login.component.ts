import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  loginForm:FormGroup;
  token: string;
   constructor( private snackBar:MatSnackBar,private route: ActivatedRoute,private formBuilder:FormBuilder,private router:Router, private httpservice: HttpService)  { }
    
    ngOnInit() {
      this.loginForm=this.formBuilder.group(
        {
          'emailId':new FormControl(this.user.emailId,[Validators.required]),
          'password':new FormControl(this.user.password, [Validators.required, Validators.minLength(6)])
        }
      )
      
    }
    
  onLogin(){
  console.log(this.loginForm.value);
  this.httpservice.postRequest('login',this.loginForm.value).subscribe(
    (response:any)=>{
      if(response.statusCode===21)
      {
        console.log(response);
        localStorage.setItem('token',response.token);
        console.log(response.token)
        this.snackBar.open(
          "Login Successfully",
          "undo",
          { duration: 2500 }
        )
           this.router.navigate(['/dashboard']);
      }
      else{
        console.log(response);
        this.snackBar.open(
          "Login Failed",
          "undo",
          { duration: 2500 }
        )
      }
    }
  );
  }
   }