import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../shared/services/posts.service';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  items: any = [] ;
  constructor(
     private postService: PostsService , 
     private modelService:NgbModal ,
     private toastr:ToastrService) { }

  ngOnInit() {
    this.getAll();
  }

  // Get All Posts
  getAll(){
    this.postService.getAll().subscribe( res => {
       this.items = res ;
    });
  }

    // Delete Items
    deleteItem(model , id){
       this.modelService.open(model).result.then(result => {
           this.postService.delete(id).subscribe( res => {
           this.toastr.success("items deleted successfully" , 'success' , {timeOut:3000 , closeButton:true , progressBar: true });
           this.getAll();
          },
        err =>{
          this.toastr.error("err.statusText" , 'Error' , {timeOut:3000 , closeButton:true , progressBar: true });
        }
       );
       },
       reason => {
        console.log(reason);
       }
       ); 
    }
}
