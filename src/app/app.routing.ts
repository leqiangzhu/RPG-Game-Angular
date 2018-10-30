import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent }   from './admin/admin.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { GameComponent } from './game/game.component';


const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
        
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'play',
        component: GameComponent
    }
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);