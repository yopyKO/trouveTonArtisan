import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { MissingPageComponent } from './missing-page/missing-page.component';
import { FicheArtisanComponent } from './fiche-artisan/fiche-artisan.component';

export const routes: Routes = [
    {path: '', component : HomeComponent},
    {path: 'list', component : ListComponent},
    {path: 'list/:category', component : ListComponent},
    {path: 'fiche-artisan/:id', component : FicheArtisanComponent},
    {path: '**', component : MissingPageComponent },
];

