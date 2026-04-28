import { Component, Input } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  @Input() user?: User;
}
