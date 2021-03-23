import { Observable } from 'rxjs/internal/Observable';
import { timer } from 'rxjs/internal/observable/timer';
import { Subject } from 'rxjs/internal/Subject';
import { switchMap, takeUntil } from 'rxjs/operators';

/* istanbul ignore next */
export function createTimer(getObserver: () => Observable<any>, stopPolling: Subject<any>, interval: number = 60e3) {
  return timer(1, interval).pipe(
    switchMap(() => {
      return getObserver();
    }),
    takeUntil(stopPolling),
  );
}
