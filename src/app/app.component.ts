import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private translate: TranslateService) {
    // Set available languages
    this.translate.addLangs(['es', 'en']);
    
    // Set default language
    this.translate.setDefaultLang('es');
    
    // Use saved language or browser language or default to Spanish
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && ['es', 'en'].includes(savedLang)) {
      this.translate.use(savedLang);
    } else {
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
    }
  }

  ngOnInit(): void {
    // Wait for translations to load
    this.translate.get('nav.about').subscribe(() => {
      this.loading = false;
    });
  }
}
