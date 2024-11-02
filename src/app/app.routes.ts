import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DatesComponent } from './pages/dates/dates.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'dates',
    component: DatesComponent
  },

  {
    path: 'customers',
    loadChildren: () => import('./pages/modules/customers.module').then(m => m.CustomersModule)
  },

  {
    path: '**',
    redirectTo: 'home'
  },
];
