import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user: User = new User();
 registerForm: FormGroup;
  constructor(private snackBar: MatSnackBar, private httpservice: HttpService, public formBuilder: FormBuilder) { }

  ngOnInit() { this.registerForm = this.formBuilder.group(
    {
      'firstName': new FormControl(this.user.firstName, [Validators.required]),
      'lastName': new FormControl(this.user.lastName, [Validators.required]),
      'emailId': new FormControl(this.user.emailId, Validators.required),
      'mobNo': new FormControl(this.user.mobNo, [Validators.required]),
      'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(6)])
      
    }
  )

}

onRegister() {
 console.log("my data",this.user)
  this.httpservice.postRequest('register', this.registerForm.value).subscribe(
    (response: any) => {
      if (response.statusCode ===20) {
       // console.log(response);
        //localStorage.setItem('emailId',this.registerForm.value.emailId);
        // localStorage.setItem('firstName',this.registerForm.value.firstName);
        //localStorage.setItem('LastName',this.registerForm.value.lastName);

        this.snackBar.open(
          "Registered Successfully",
          "undo",
          { duration: 2500 }
        )
      } else {
        console.log(response);
        this.snackBar.open(
          "Registration Failed",
          "undo",
          { duration: 2500 }
        )
      }

    }
  )
 }
 }