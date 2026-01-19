import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  competencyKeys = ['territorial', 'participatory', 'education', 'environmental'];

  constructor(public translate: TranslateService) {}
}
