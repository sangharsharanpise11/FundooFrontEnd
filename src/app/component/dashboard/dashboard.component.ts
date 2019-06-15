import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 emailId:string;
 token:string;
 name:string;
 login:Login=new Login();


  constructor(private router :Router,private matdialog:MatDialog ) { }

  ngOnInit() {

    this.emailId=localStorage.getItem('emailId')
    console.log(this.emailId);
    this.token=localStorage.getItem('token')
    console.log(this.token);
  }

  onLogout()
  {
    localStorage.removeItem('emailId');
    console.log(this.emailId);
    localStorage.removeItem('token');
    console.log(this.token);
  }
    notes(){
      this.router.navigate(['/dashboard/notes'])
    }
    reminders(){
      this.router.navigate(['/dashboard/remainder'])
    }
    editLabels(){
      this.router.navigate(['/dashboard/editlabel'])
     }
     archive(){
      this.router.navigate(['dashboard/archive'])
     }
    trash(){
     this.router.navigate(['/dashboard/trash']);
    }

    openAccount(items): void {
    
      const dialogRef = this.matdialog.open(ProfileDialogComponent, {
        width: '600px', height: '230px',
        data: {
                  emailId:items.emailId,
                  name:items.name
             }
      });
  
         dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
   
}
