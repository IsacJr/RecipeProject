import { Routes } from '@angular/router';

import { 
    ListComponent,
    DetailComponent,
    NewComponent
} from './containers'

export const RecipeRoutes: Routes = [
    {
        path: 'recipes',
        redirectTo: 'recipes/list'
    },
    {
        path: 'recipes/list',
        component: ListComponent
    },
    {
        path: 'recipes/detail',
        component: DetailComponent
    },
    {
        path: 'recipes/new',
        component: NewComponent
    }
]
