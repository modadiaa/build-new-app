import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteShowComponent } from './note-show/note-show.component';


@NgModule({
  declarations: [NotesListComponent, NoteShowComponent],
  imports: [
    CommonModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
