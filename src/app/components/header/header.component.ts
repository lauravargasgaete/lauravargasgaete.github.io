import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(
    public translate: TranslateService,
    private router: Router
  ) {}

  get currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang || 'es';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleLanguage(): void {
    const newLang = this.currentLang === 'es' ? 'en' : 'es';
    // Navigate to the new language URL
    this.router.navigate([`/${newLang}/`]);
  }

  toggleMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollTo(event: Event, target: string): void {
    event.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    this.closeMenu();
  }
}
