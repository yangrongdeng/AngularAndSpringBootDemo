import {Inject, Injectable, InjectionToken} from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('浏览器缓存', {
  providedIn: 'root',
  factory: () => localStorage
});

/**
 * 注入BOM的LocalStorage对象到StorageService，以后程序中直接使用StorageService，
 * 而无需和浏览器的LocalStorage直接打交道
 */
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
