import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'ng-job-search';
  isFavourite: boolean =
  false;

  constructor(private router:Router){}
  alljob(){
     
   this.router.navigate(['/all-jobs'])
  }
  favjob(){
    this.router.navigate(['/fav-jobs'])
  }
}
