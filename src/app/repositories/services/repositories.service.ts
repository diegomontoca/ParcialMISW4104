import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  private readonly repositoriesUrl =
    'https://gist.githubusercontent.com/caev03/628509e0b3fe41dd44f6a2ab09d81ef9/raw/f847eafbecca47287ff0faec4de1329b874f5711/repositories.json';

  constructor(private readonly http: HttpClient) {}

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.repositoriesUrl).pipe(
      map((repositories) =>
        repositories.map(
          (repository) =>
            new Repository(
              repository.id,
              repository.name,
              repository.description,
              repository.language,
              repository.stars,
              repository.createdAt,
              repository.ownerId,
            ),
        ),
      ),
    );
  }

  getRepository(id: number): Observable<Repository | undefined> {
    return this.getRepositories().pipe(
      map((repositories) => repositories.find((repository) => repository.id === id)),
    );
  }
}
