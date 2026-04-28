import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Repository } from '../../models/repository';
import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-repository-detail',
  standalone: false,
  templateUrl: './repository-detail.html',
  styleUrl: './repository-detail.css',
})
export class RepositoryDetail implements OnInit {
  repository = signal<Repository | undefined>(undefined);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(
    private readonly route: ActivatedRoute,
    private readonly repositoriesService: RepositoriesService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) =>
          this.repositoriesService.getRepository(Number(params.get('id'))),
        ),
      )
      .subscribe({
        next: (repository) => {
          this.repository.set(repository);
          this.isLoading.set(false);
        },
        error: () => {
          this.errorMessage.set('No fue posible cargar el repositorio.');
          this.isLoading.set(false);
        },
      });
  }
}
