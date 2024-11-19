import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MissingPageComponent } from './missing-page/missing-page.component';

export const routes: Routes = [
    {
        path: '',
        component : HomeComponent,
    },
    {
        path: 'list',
        component : ListComponent,
    },
    {
        path: 'list/:id',
        component : ListComponent,
    },
    {
        path: '**',
        component : MissingPageComponent,
    },
];

