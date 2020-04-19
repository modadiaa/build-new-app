import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';
import {  ToastrService } from 'ngx-toastr';
import {  FormGroup , FormBuilder , Validators } from '@angular/forms';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  addForm: FormGroup ;
  submitted: boolean ;
  //toastr: any;
  constructor(
    private router:Router ,
    private fb:FormBuilder,
    private postsService:PostsService ,
    private toastr:ToastrService
    ) { }

  ngOnInit() {
    this.buildAddForm();
  }

  onSubmit(){
    this.submitted = true;
    if(this.addForm.invalid){
      return ;
    }
    this.postsService.add(this.addForm.value).subscribe(
      res => {
      this.toastr.success('items Add successfully' , 'Success' , {timeOut:3000 , closeButton:true , progressBar: true });
      this.router.navigate(['../admin/posts']);
    },
    err => {
      this.toastr.error(err.statusText , 'Error' , {timeOut:3000 , closeButton:true , progressBar: true });

    }
    );
  }

  // to access input
   get f() { return this.addForm.controls ; }


  buildAddForm(){
    this.addForm = this.fb.group({
      title: [null , Validators.required ],
      description:[null , Validators.required ]
    });
  }
}
