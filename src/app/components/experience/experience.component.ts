import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experienceKeys = ['capitalazul', 'cecrea', 'kosmofono', 'udechile', 'culture'];

  constructor(public translate: TranslateService) {}
}
