import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.url.startsWith(environment.apiUrl)){
    //here you can  send your headers
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1ODY2MjYzNzIsImV4cCI6MTU4NjYyOTk3Mn0.OjljvNmhEVs0ltm8-HoG3c6ASYH7-cALmIa8EGny6xM'

      }
    });
  }
    return next.handle(request);
  }
}
