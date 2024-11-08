import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobserviceService {
  EmployeeInfo: String[]=[]
  favjob :string[]=[]
  isFavourite  :boolean=false
  private favoriteJobs: any[] = [];
  private readonly localStorageKey = 'favoriteJobs';
  constructor() { }

  // toggleFavourite(job:any){
  //   this.favjob.push(job)
  //   console.log(job)

  // }
 
  getfavjobs(){
    return this.favoriteJobs;


  }

  addToFavorites(jobs:any){
    if (!this.isJobInFavorites(jobs)) {
      this.favoriteJobs.push(jobs);
      // localStorage.setItem(this.localStorageKey,JSON.stringify(jobs))
    }
  }


  removeFromFavorites(jobs:any){
    const index = this.favoriteJobs.findIndex(favJob => favJob.id === jobs.id);
    if (index !== -1) {
      this.favoriteJobs.splice(index, 1);
      // localStorage.setItem(this.localStorageKey,JSON.stringify(jobs))
    }

  }
 
  isJobInFavorites(jobs:any):boolean{
    return this.favoriteJobs.some(favJob => favJob.id === jobs.id);
  }
   

  public getFavoriteStatus(jobId: string): boolean {
    const storedStatus = localStorage.getItem(`isfavourite_${jobId}`);
    return storedStatus ? JSON.parse(storedStatus) : false  ;
  
  
    
  }
}