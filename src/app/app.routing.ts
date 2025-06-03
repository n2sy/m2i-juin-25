import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddComponent } from './add/add.component';
import { InfosComponent } from './infos/infos.component';

export let myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'accounts', component: HomeAccountComponent },
];
