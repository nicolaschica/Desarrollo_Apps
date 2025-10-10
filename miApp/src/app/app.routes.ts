import { Routes } from '@angular/router';
// import { NavFootPage } from './pages/nav-foot/nav-foot.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  
  // {
  //   //promesas
  //   path: 'nav-foot',
  //   loadComponent: () => import('./pages/nav-foot/nav-foot.page').then( m => m.NavFootPage)
  //   // component: NavFootPage
  // },
  {
    path: 'page1',
    loadComponent: () => import('./pages/page1/page1.page').then( m => m.Page1Component)
  },
];
