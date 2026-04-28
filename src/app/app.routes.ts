import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'repositories',
    loadChildren: () =>
      import('./repositories/repositories.module').then((m) => m.RepositoriesModule),
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];
