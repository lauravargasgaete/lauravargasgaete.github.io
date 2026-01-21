import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
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

  constructor(public translate: TranslateService) {}
}
