import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface ProjectItem {
  title: string;
  description: string;
  org: string;
  year: string;
  badge?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectIcons: Record<string, string> = {
    kosmofono: '🎵',
    somos: '🌊',
    cecrea: '🎭',
    dialogos: '📚'
  };

  projectColors: Record<string, string> = {
    kosmofono: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    somos: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
    cecrea: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    dialogos: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)'
  };

  constructor(public i18n: I18nService) {}

  get projects(): [string, ProjectItem][] {
    const p = this.i18n.getSection<Record<string, ProjectItem>>('projects.items');
    return Object.entries(p);
  }
}
