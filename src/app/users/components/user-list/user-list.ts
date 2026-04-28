import { Component, OnInit, signal } from '@angular/core';

import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {
  users = signal<User[]>([]);
  selectedUser = signal<User | undefined>(undefined);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users.set(users);
        this.selectedUser.set(users[0]);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('No fue posible cargar los usuarios.');
        this.isLoading.set(false);
      },
    });
  }

  selectUser(user: User): void {
    this.selectedUser.set(user);
  }

  trackByUserId(_: number, user: User): number {
    return user.id;
  }
}
