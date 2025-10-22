import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { GeneratedPage } from './generated-page/generated-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'generated', component: GeneratedPage },
    { path: '**', component: HomePage } //SI ALGUIEN QUIERE METER SU 404 VA ACÁ
];
