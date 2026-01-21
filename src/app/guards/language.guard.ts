import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageGuard implements CanActivate {
  private supportedLanguages = ['es', 'en'];
  private defaultLanguage = 'es';

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const lang = route.params['lang'];

    // Check if language is supported
    if (lang && this.supportedLanguages.includes(lang)) {
      // Set the language
      this.translate.use(lang);
      // Save to localStorage for future visits
      localStorage.setItem('preferredLang', lang);
      return true;
    } else {
      // Invalid language - redirect to default
      this.router.navigate([`/${this.defaultLanguage}/`]);
      return false;
    }
  }
}
