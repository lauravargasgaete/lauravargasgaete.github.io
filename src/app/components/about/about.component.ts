import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Competency {
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  competencyIcons: Record<string, string> = {
    territorial: '🌍',
    participatory: '🤝',
    education: '🎨',
    environmental: '🌱'
  };

  constructor(public i18n: I18nService) {}

  get competencies(): [string, Competency][] {
    const comps = this.i18n.getSection<Record<string, Competency>>('about.competencies');
    return Object.entries(comps);
  }
}
