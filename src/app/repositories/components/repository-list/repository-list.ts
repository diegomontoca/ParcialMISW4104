import { Component, OnInit, signal } from '@angular/core';

import { Repository } from '../../models/repository';
import { RepositoriesService } from '../../services/repositories.service';

@Component({
  selector: 'app-repository-list',
  standalone: false,
  templateUrl: './repository-list.html',
  styleUrl: './repository-list.css',
})
export class RepositoryList implements OnInit {
  repositories = signal<Repository[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private readonly repositoriesService: RepositoriesService) {}

  ngOnInit(): void {
    this.repositoriesService.getRepositories().subscribe({
      next: (repositories) => {
        this.repositories.set(repositories);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('No fue posible cargar los repositorios.');
        this.isLoading.set(false);
      },
    });
  }

  trackByRepositoryId(_: number, repository: Repository): number {
    return repository.id;
  }
}
