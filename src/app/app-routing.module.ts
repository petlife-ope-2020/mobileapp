import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ServiceResolver } from './search/service-resolver.service'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopPageModule)
  },
  {
    path: 'add-pets',
    loadChildren: () => import('./add-pets/add-pets.module').then(m => m.AddPetsPageModule)
  },
  {
    path: 'results-list',
    loadChildren: () => import('./search/results-list/results-list.module').then( m => m.ResultsListPageModule)
  },
  {
    path: 'service-page',
    loadChildren: () => import('./search/service-page/service-page.module').then( m => m.ServicePagePageModule),
    resolve: { service: ServiceResolver }
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [ ServiceResolver ]
})
export class AppRoutingModule { }
