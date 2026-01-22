import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  // Constant to determine number of keys displayed initially
  private readonly INITIAL_DISPLAY_COUNT = 3;
  
  experienceKeys = [
    'kosmofono',
    'dirac',
    'cecrea',
    'biblioteca',
    'maradentro',
    'pnl',
    'techo',
    'spais',
    'onu'
  ];

  showAll = false;

  constructor(public translate: TranslateService) {}

  getVisibleKeys(): string[] {
    return this.showAll ? this.experienceKeys : this.experienceKeys.slice(0, this.INITIAL_DISPLAY_COUNT);
  }

  toggleShowAll(buttonElement?: HTMLElement): void {
    this.showAll = !this.showAll;
    
    // When collapsing, scroll to the button to keep it in view
    if (!this.showAll && buttonElement) {
      // Use setTimeout to allow the DOM to update first
      setTimeout(() => {
        buttonElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 200);
    }
  }
}
