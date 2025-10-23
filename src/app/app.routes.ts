import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { GeneratedPage } from './generated-page/generated-page';
import { SavesPage } from './saves-page/saves-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'generated/:palette', component: GeneratedPage },
    { path: 'saves', component: SavesPage },
    { path: '**', component: HomePage } //SI ALGUIEN QUIERE METER SU 404 VA ACÁ
];
