import { Routes } from '@angular/router';

import { 
    HomeComponent,
    DetailComponent,
    NewComponent
} from './containers'
import { ContactComponent } from './containers/contact/contact.component';

export const RecipeRoutes: Routes = [
    {
        path: 'recipes',
        redirectTo: 'recipes/home'
    },
    {
        path: 'recipes/home',
        component: HomeComponent
    },
    {
        path: 'recipes/detail',
        component: DetailComponent
    },
    {
        path: 'recipes/new',
        component: NewComponent
    },
    {
        path: 'recipes/contact',
        component: ContactComponent
    }
]
