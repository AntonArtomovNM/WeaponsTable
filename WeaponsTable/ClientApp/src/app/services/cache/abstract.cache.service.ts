import {Observable} from 'rxjs';
import dayjs from 'dayjs';

export abstract class AbstractCacheService<T> {

  readonly CACHE_DURATION_IN_MINUTES = 5;

  private cache: {
    expires: Date,
    value: Observable<T>
  } | null;

  constructor() {
  }

  getValue(): Observable<T> | null {
    if (!this.cache) {
      return null;
    }

    if (dayjs(new Date()).isAfter(this.cache.expires)) {
      return null;
    }

    return this.cache.value;
  }

  setValue(value: Observable<T>) {
    this.cache = {
      value,
      expires: dayjs(new Date()).add(this.CACHE_DURATION_IN_MINUTES, 'minutes').toDate()
    };

  }

  clearCache() {
    this.cache = null;
  }
}