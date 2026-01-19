import { Component } from '@angular/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public i18n: I18nService) {}

  get email(): { label: string; value: string } {
    return this.i18n.getSection('contact.email');
  }

  get phone(): { label: string; value: string } {
    return this.i18n.getSection('contact.phone');
  }

  get location(): { label: string; value: string } {
    return this.i18n.getSection('contact.location');
  }

  get linkedin(): { label: string; value: string; url: string } {
    return this.i18n.getSection('contact.linkedin');
  }
}
