import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageGuard } from './guards/language.guard';

const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    children: []
  },
  {
    // Redirect root to default language
    path: '',
    pathMatch: 'full',
    redirectTo: '/es/'
  },
  {
    // Catch-all redirect to default language
    path: '**',
    redirectTo: '/es/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
