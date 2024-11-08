import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FavJobsComponent } from '../fav-jobs/fav-jobs.component';
import { JobserviceService } from '../services/jobservice.service';



@Component({
  selector: 'app-all-jobs',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FavJobsComponent],
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css'
})


export class AllJobsComponent {
 public EmployeeInfo: any
 isFavourite :boolean = false
 jobs:any
 private readonly localStorageKey = 'favoriteJobs';
  favJobs: any;

  
 constructor(public http:HttpClient,public jobservice:JobserviceService){}

 ngOnInit(){
  const url :string = '/jobs'
  this.http.get(url).subscribe((res: any) => {
    this.EmployeeInfo = res.map((job: any) => ({ ...job ,isFavourite: this.jobservice.getFavoriteStatus(job.id)}));
  });
//   const starred = localStorage.getItem('isfavourite');
//   console.log(starred)
// if (starred) {
// this.isFavourite = JSON.parse(starred);
 
// }

  


 

 }





 toggleFavorite(jobs:any){
 
console.log(jobs.isFavourite)
  console.log("toggle clicked")
  console.log("toggle clicked for job:", jobs.id)
  jobs.isFavourite = !jobs.isFavourite
  localStorage.setItem(`isfavourite_${jobs.id}`, JSON.stringify(jobs.isFavourite));
   
  let favoriteJobsString = localStorage.getItem(this.localStorageKey);
  let favoriteJobs =[];
  if (favoriteJobsString) {
    favoriteJobs = JSON.parse(favoriteJobsString);
  }


  if (jobs.isFavourite) {
    favoriteJobs.push(jobs);
  } else {
    favoriteJobs = favoriteJobs.filter((job: any) => job.id !== jobs.id);
  }

  
  localStorage.setItem(this.localStorageKey, JSON.stringify(favoriteJobs));

  if (jobs.isFavourite) {
    this.jobservice.addToFavorites(jobs);
  } else {
    this.jobservice.removeFromFavorites(jobs);
  }
  
  
 } 


//  private getFavoriteStatus(jobId: string): boolean {
//   const storedStatus = localStorage.getItem(`isfavourite_${jobId}`);
//   return storedStatus ? JSON.parse(storedStatus) : false  ;

  
// }
}









