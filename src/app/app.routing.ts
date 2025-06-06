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
import { ReactFormComponent } from './react-form/react-form.component';
import { allowTokenGuard } from './guards/allow-token.guard';
import { quitterLoginGuard } from './guards/quitter-login.guard';
import { quitterFormGuard } from './guards/quitter-form.guard';
import { blockLoginGuard } from './guards/block-login.guard';
import { HomeProductsComponent } from './products/home-products/home-products.component';

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
        canActivate: [allowTokenGuard],
        canDeactivate: [quitterFormGuard],
      },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          {
            path: 'edit',
            component: EditerComponent,
            canActivate: [allowTokenGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [blockLoginGuard],
    canDeactivate: [quitterLoginGuard],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'products', component: HomeProductsComponent },
  //   { path: 'servers', redirectTo: '/accounts', pathMatch: 'prefix' },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'react-form', component: ReactFormComponent },
  { path: '**', redirectTo: '/not-found' }, // Wild Route
];
