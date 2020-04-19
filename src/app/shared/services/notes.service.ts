import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor( private http: HttpClient ) { }

  // Get All Items
  getAll(){
  }
 // return this.http.get(`${ environment.apiUrl }/notes `, this.httpOptions);
  // Delete Items
  delete(id){
    return this.http.delete(`${ environment.apiUrl }/notes/${id}`);
  }

    // Add New Items
    add(data){
      return this.http.post(`${ environment.apiUrl }/notes`, data);
    }

      // Get Items
      getItem(id){
        return this.http.get(`${ environment.apiUrl }/notes/${id}` );
      }
  

    // Edit Items
    update(data , id){
      return this.http.put(`${ environment.apiUrl }/notes/${id}`, data);
    }
}
