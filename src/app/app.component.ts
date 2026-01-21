import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    // Set available languages
    this.translate.addLangs(['es', 'en']);
    
    // Set default language
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    // Check if we're on the root path or a path without language
    const currentPath = window.location.pathname;
    
    if (currentPath === '/' || currentPath === '') {
      // Determine which language to use
      const savedLang = localStorage.getItem('preferredLang');
      let targetLang = 'es';
      
      if (savedLang && ['es', 'en'].includes(savedLang)) {
        targetLang = savedLang;
      } else {
        const browserLang = this.translate.getBrowserLang();
        targetLang = browserLang?.match(/en|es/) ? browserLang : 'es';
      }
      
      // Navigate to the language route
      this.router.navigate([`/${targetLang}/`]);
    }
    
    // Wait for translations to load
    this.translate.get('nav.about').subscribe(() => {
      this.loading = false;
    });
    
    // Subscribe to route changes to update loading state
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Ensure translations are loaded after navigation
      if (!this.loading && this.translate.currentLang) {
        this.translate.get('nav.about').subscribe();
      }
    });
  }
}
