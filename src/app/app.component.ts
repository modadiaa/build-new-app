import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'build-application';
  // arr = [1,2,3,9] ;

  constructor(private toastr: ToastrService) {}


  showSuccess() {
  }
}
