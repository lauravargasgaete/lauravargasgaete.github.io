import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  degreeKeys = ['master', 'sociology'];
  certIcons = ['📜', '📊', '👧', '🏆'];

  constructor(public translate: TranslateService) {}
}
