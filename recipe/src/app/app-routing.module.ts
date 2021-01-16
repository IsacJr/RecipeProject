import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeRoutes } from './recipe';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'recipes/home',
        pathMatch: 'full'
    },
    ...RecipeRoutes
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}