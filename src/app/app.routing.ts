import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
        
    },

    {
        path: 'admin',
        component: AdminComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);