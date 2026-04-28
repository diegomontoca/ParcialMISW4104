import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly usersUrl =
    'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/users.json';

  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      map((users) =>
        users.map(
          (user) =>
            new User(
              user.id,
              user.username,
              user.name,
              user.email,
              user.avatarUrl,
              user.role,
              user.location,
              user.repoIds,
            ),
        ),
      ),
    );
  }
}
