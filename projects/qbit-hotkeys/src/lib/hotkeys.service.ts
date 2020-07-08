import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { emitShortcut } from './utils';

export interface HotkeyOptions {
  element?: any;
  keys: string;
  description: string;
}

@Injectable()
export class HotkeysService {
  public defaults: Partial<HotkeyOptions> = {
    element: document,
  };
  public hotkeys: Map<any, any> = new Map();
  public emitShortcutFn = emitShortcut;

  constructor(private eventManager: EventManager) {}

  addShortcut(options: Partial<HotkeyOptions>) {
    const merged: any = { ...this.defaults, ...options };
    const event = `keydown.${merged.keys}`;

    this.hotkeys.set(merged.keys, merged.description);

    return new Observable((observer) => {
      const handler = (e) => {
        const isNotInput = e.target.nodeName !== 'INPUT';
        const targetIsElement = e.target === merged.element;

        console.log(e, { isNotInput, targetIsElement });
        /* istanbul ignore next */
        if (isNotInput || targetIsElement) {
          e.preventDefault();
          observer.next(e);
        }
      };

      const dispose = this.eventManager.addEventListener(
        merged.element,
        event,
        handler
      );

      return () => {
        console.log('unsub');
        dispose();
        this.hotkeys.delete(merged.keys);
      };
    });
  }

  dispatchShortcut(opts: HotkeyOptions) {
    const [modifierKey, char] = opts.keys.split('.');
    if (this.hotkeys.has(opts.keys)) {
      this.emitShortcutFn({
        chr: char,
        shiftKey: modifierKey === 'shift',
        altKey: modifierKey === 'alt',
        ctrlKey: modifierKey === 'control',
        metaKey: modifierKey === 'meta',
      });
      return true;
    }

    return false;
  }
}
