import { Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { FavJobsComponent } from './fav-jobs/fav-jobs.component';

export const routes: Routes = [
    {
        path:'all-jobs',component:AllJobsComponent
    },
    {
        path:'fav-jobs',component:FavJobsComponent
    }
];
