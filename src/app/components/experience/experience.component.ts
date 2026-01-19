import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface ExperienceItem {
  title: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
  highlight?: boolean;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  constructor(public i18n: I18nService) {}

  get items(): [string, ExperienceItem][] {
    const exp = this.i18n.getSection<Record<string, ExperienceItem>>('experience.items');
    return Object.entries(exp);
  }
}
