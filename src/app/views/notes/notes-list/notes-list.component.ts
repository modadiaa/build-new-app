import { Component, OnInit } from '@angular/core';
import { NotesService } from './../../../shared/services/notes.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  items: any = [];
  constructor(
    private noteService: NotesService,
    private modelService: NgbModal,
    private toastr: ToastrService) { }
  ngOnInit() {
    this.getAll();
  }
  // Get All Posts
  getAll() {
    this.noteService.getAll().subscribe(res => {
      this.items = res;
    });
  }
  // Delete Items
  deleteItem(model, id) {
    this.modelService.open(model).result.then(result => {
      this.noteService.delete(id).subscribe(res => {
        this.toastr.success("items deleted successfully", 'success', { timeOut: 3000, closeButton: true, progressBar: true });
        this.getAll();
      },
        err => {
          this.toastr.error("err.statusText", 'Error', { timeOut: 3000, closeButton: true, progressBar: true });
        }
      );
    },
      reason => {
        console.log(reason);
      }
    );
  }

  // add or edit model
  open(content , id) {
    this.modelService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    }, (reason) => {
      console.log(reason);
    });
    console.log(id);

  }
}
