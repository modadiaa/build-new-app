import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // httpOptions = {
  //  headers: new HttpHeaders({
  //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODY2MDA4ODEsImV4cCI6MTU4NjYwNDQ4MX0.AkRXf81-yw84vDbkqnUAh-xFcM1W0JhpN0yVQnbcQ3Q'
  //  })
  // };

  constructor( private http: HttpClient ) { }

  // Get All Items
  getAll(){
    return this.http.get(`${ environment.apiUrl }/posts `);
  }
 // return this.http.get(`${ environment.apiUrl }/posts `, this.httpOptions);
  // Delete Items
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/posts/${id}`);
  }

    // Add New Items
    add(data){
      return this.http.post(`${ environment.apiUrl }/posts`, data);
    }

      // Get Items
      getItem(id){
        return this.http.get(`${ environment.apiUrl }/posts/${id}` );
      }
  

    // Edit Items
    update(data , id){
      return this.http.put(`${ environment.apiUrl }/posts/${id}`, data);
    }
}
