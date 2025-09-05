import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SecundarioComponent } from './pages/secundario/secundario.component';
import { TerciarioComponent } from './pages/terciario/terciario.component';


export const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'secundario', component: SecundarioComponent },
  { path: 'terciario', component: TerciarioComponent },
];
