import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

interface Degree {
  badge: string;
  title: string;
  institution: string;
  year: string;
  description: string;
}

interface Certification {
  title: string;
  org: string;
  year: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  certIcons = ['📜', '📊', '👧', '🏆'];

  constructor(public i18n: I18nService) {}

  get degrees(): [string, Degree][] {
    const d = this.i18n.getSection<Record<string, Degree>>('education.degrees');
    return Object.entries(d);
  }

  get certifications(): Certification[] {
    return this.i18n.getSection<Certification[]>('education.certifications.items') || [];
  }
}
