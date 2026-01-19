import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export type Language = 'es' | 'en';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLang$ = new BehaviorSubject<Language>('es');
  private translations: Record<Language, any> = { es: {}, en: {} };
  private loaded = false;

  constructor(private http: HttpClient) {
    this.initLanguage();
  }

  private initLanguage(): void {
    const saved = localStorage.getItem('preferredLang') as Language | null;
    if (saved && (saved === 'es' || saved === 'en')) {
      this.currentLang$.next(saved);
    } else {
      const browserLang = navigator.language.slice(0, 2);
      this.currentLang$.next(browserLang === 'en' ? 'en' : 'es');
    }
    document.documentElement.lang = this.currentLang$.value;
  }

  async loadTranslations(): Promise<void> {
    if (this.loaded) return;
    
    try {
      const [es, en] = await Promise.all([
        this.http.get<any>('/assets/i18n/es.json').toPromise(),
        this.http.get<any>('/assets/i18n/en.json').toPromise()
      ]);
      this.translations = { es: es || {}, en: en || {} };
      this.loaded = true;
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  get lang(): Language {
    return this.currentLang$.value;
  }

  get lang$(): Observable<Language> {
    return this.currentLang$.asObservable();
  }

  setLanguage(lang: Language): void {
    if (lang !== this.currentLang$.value) {
      this.currentLang$.next(lang);
      document.documentElement.lang = lang;
      localStorage.setItem('preferredLang', lang);
    }
  }

  toggleLanguage(): void {
    this.setLanguage(this.currentLang$.value === 'es' ? 'en' : 'es');
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLang$.value];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  getSection<T = any>(key: string): T {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLang$.value];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return {} as T;
      }
    }

    return value as T;
  }
}
