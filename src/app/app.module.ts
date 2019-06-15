import {MatCardModule} from '@angular/material/card'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { MatButtonModule} from '@angular/material/button'; 
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { AddnoteComponent } from './component/addnote/addnote.component';
import { AppiconsComponent } from './component/appicons/appicons.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DialognoteComponent } from './component/dialognote/dialognote.component';
import { NoteComponent } from './component/note/note.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileDialogComponent } from './component/profile-dialog/profile-dialog.component';
import { TrashNotesComponent } from './component/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './component/archive-notes/archive-notes.component';
import { RemainderComponent } from './component/remainder/remainder.component';
import { LabelComponent } from './component/label/label.component';
import {MatChipsModule} from '@angular/material/chips';
import { CollabratorDialogComponent } from './component/collabrator-dialog/collabrator-dialog.component';
import { LabelviewComponent } from './component/labelview/labelview.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    ResetComponent,
    AddnoteComponent,
    AppiconsComponent,
    DashboardComponent,
    DialognoteComponent,
    NoteComponent,
    ProfileDialogComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    RemainderComponent,
    LabelComponent,
    CollabratorDialogComponent,
    LabelviewComponent,
   



 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatListModule,
    MatTooltipModule,
    MatSelectModule,
    FormsModule ,
    MatDialogModule ,
    FlexLayoutModule,
    MatGridListModule,
    MatChipsModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
