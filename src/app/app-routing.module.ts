import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { AuthenticationGuard } from './service/AuthGuard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { NoteComponent } from './component/note/note.component';
import { DialognoteComponent } from './component/dialognote/dialognote.component';
import { TrashNotesComponent } from './component/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './component/archive-notes/archive-notes.component';
import { LabelComponent } from './component/label/label.component';
import { RemainderComponent } from './component/remainder/remainder.component';


const routes: Routes = [
  {
    path:"",
    component:RegisterComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'forgot',
    component: ForgotComponent
  },
  
  {
    path: 'resetPassword/:token',
    component: ResetComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path: 'addNote',
    component: AddnoteComponent
  },
  {
    path: 'dialognote',
    component: DialognoteComponent
  },
  
 {
    canActivate: [AuthenticationGuard],
    path: 'dashboard',
    component: DashboardComponent,
    children: [
     
      {
        path: '',
        component: AddnoteComponent
      },
      {
       path: 'note',
       component: NoteComponent
     },
     {
       path:'dialognote',
       component:DialognoteComponent
     },
     {
      path:'trash',
      component:TrashNotesComponent
    },
    {
      path:'archive',
      component:ArchiveNotesComponent
    },
    {
        path: 'label',
        component: LabelComponent
    },
    {
      path: 'remainder',
      component: RemainderComponent
    },
     ]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
