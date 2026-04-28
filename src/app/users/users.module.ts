import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetail } from './components/user-detail/user-detail';
import { UserList } from './components/user-list/user-list';

const routes: Routes = [
  {
    path: '',
    component: UserList,
  },
];

@NgModule({
  declarations: [UserList, UserDetail],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
