import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component'
import {DashboardComponent} from './dashboard/dashboard.component'

export const router: Routes = [
    {
        path:'' ,component:DashboardComponent
    },
     {
        path:'dashboard' ,component:DashboardComponent
    }

];

export const routes:ModuleWithProviders= RouterModule.forRoot(router);