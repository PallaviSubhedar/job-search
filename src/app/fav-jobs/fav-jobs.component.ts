import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AllJobsComponent } from '../all-jobs/all-jobs.component';
import { JobserviceService } from '../services/jobservice.service';

@Component({
  selector: 'app-fav-jobs',
  standalone: true,
  imports: [CommonModule,AllJobsComponent],
  templateUrl: './fav-jobs.component.html',
  styleUrl: './fav-jobs.component.css'
})
export class FavJobsComponent {
 favJobs: any[]=[];
  isFavourite: any
  private readonly localStorageKey = 'favoriteJobs';
  jobs: any[]=[];
  savedJobs: any[]=[];
 constructor(public jobservice:JobserviceService){}

 ngOnInit(){

  let favJobs= localStorage.getItem(this.localStorageKey)
  // this.favJobs = this.jobservice.getfavjobs();
  console.log(favJobs)

  if (favJobs !== null) {
    this.jobs = JSON.parse(favJobs);
    console.log(this.jobs)
    // Now you can work with the `jobs` object
  } else {
    console.error("favJobs is null. Unable to parse.");
  }
  }
  

  
  getjobs(){
   
  }
  

    
 
 }

