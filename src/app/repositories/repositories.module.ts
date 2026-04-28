import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';

import { RepositoryDetail } from './components/repository-detail/repository-detail';
import { RepositoryList } from './components/repository-list/repository-list';

const routes: Routes = [
  {
    path: '',
    component: RepositoryList,
  },
  {
    path: ':id',
    component: RepositoryDetail,
  },
];

@NgModule({
  declarations: [RepositoryList, RepositoryDetail],
  imports: [CommonModule, RouterLink, RouterModule.forChild(routes)],
})
export class RepositoriesModule {}
