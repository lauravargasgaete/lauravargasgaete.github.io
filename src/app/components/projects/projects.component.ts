import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // All project keys (7 total)
  allProjectKeys = ['kosmofono', 'somos', 'cecrea', 'dialogos', 'frankfurt', 'tejedoras', 'habitat'];
  
  // Initially show only featured projects (3)
  featuredProjectKeys = ['kosmofono', 'somos', 'cecrea'];
  
  // Expansion state
  isExpanded = false;
  
  projectIcons: Record<string, string> = {
    kosmofono: '🎵',
    somos: '🌊',
    cecrea: '🎭',
    dialogos: '📚',
    frankfurt: '📖',
    tejedoras: '🧶',
    habitat: '🌎'
  };

  projectColors: Record<string, string> = {
    kosmofono: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
    somos: 'linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)',
    cecrea: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
    dialogos: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)',
    frankfurt: 'linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)',
    tejedoras: 'linear-gradient(135deg, #b45309 0%, #fbbf24 100%)',
    habitat: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)'
  };

  constructor(public translate: TranslateService) {}

  get visibleProjects(): string[] {
    return this.isExpanded ? this.allProjectKeys : this.featuredProjectKeys;
  }

  get hiddenCount(): number {
    return this.allProjectKeys.length - this.featuredProjectKeys.length;
  }

  isFeatured(key: string): boolean {
    return key === 'kosmofono';
  }

  toggleExpand(buttonElement?: HTMLElement): void {
    this.isExpanded = !this.isExpanded;
    
    // When collapsing, scroll to the button to keep it in view
    if (!this.isExpanded && buttonElement) {
      // Use setTimeout to allow the DOM to update first
      setTimeout(() => {
        buttonElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }
}
