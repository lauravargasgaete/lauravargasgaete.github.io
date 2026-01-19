import { Component, OnInit } from '@angular/core';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private i18n: I18nService) {}

  async ngOnInit(): Promise<void> {
    await this.i18n.loadTranslations();
    this.loading = false;
  }
}
