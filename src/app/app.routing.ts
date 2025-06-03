import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddComponent } from './add/add.component';
import { InfosComponent } from './infos/infos.component';
import { EditerComponent } from './editer/editer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

export let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      {
        path: 'add',
        loadComponent: () =>
          import('./add/add.component').then((c) => c.AddComponent),
      },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditerComponent },
        ],
      },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  //   { path: 'servers', redirectTo: '/accounts', pathMatch: 'prefix' },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/not-found' }, // Wild Route
];
