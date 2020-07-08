import { TestBed } from '@angular/core/testing';
import { HotkeysService } from './hotkeys.service';
import { emitShortcut } from './utils';

const SHORTCUTS = {
  debugScreen: {
    keys: 'shift.d',
    description: 'SHORTCUT:DEBUG_SCREEN',
  },
  hotkeysHelp: {
    keys: 'shift.?',
    description: 'SHORTCUT:HELP_SCREEN',
  },
};

describe('HotkeysService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HotkeysService],
    })
  );

  it('should be created', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    expect(service).toBeTruthy();
  });

  it('should register shortcuts', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    service.addShortcut(SHORTCUTS.hotkeysHelp).subscribe();

    expect(service.hotkeys.has('shift.?')).toEqual(true);
    expect(service.hotkeys.get('shift.?')).toEqual(
      SHORTCUTS.hotkeysHelp.description
    );
  });

  it('observable should run when keys sent', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    service.addShortcut(SHORTCUTS.hotkeysHelp).subscribe();

    const mock = {
      sub() {},
    };
    spyOn(mock, 'sub');

    service.addShortcut(SHORTCUTS.hotkeysHelp).subscribe(mock.sub);

    emitShortcut({ chr: '?', shiftKey: true });

    expect(mock.sub).toHaveBeenCalled();
  });

  it('dispatch shortcut should work (registered hotkey)', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    service.emitShortcutFn = () => {};
    service.addShortcut(SHORTCUTS.hotkeysHelp);

    spyOn(service, 'emitShortcutFn');

    const resp = service.dispatchShortcut(SHORTCUTS.hotkeysHelp);

    expect(resp).toBe(true);
    expect(service.emitShortcutFn).toHaveBeenCalled();
  });

  it('dispatch shortcut should work (if not registerd)', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    service.addShortcut(SHORTCUTS.hotkeysHelp);
    service.emitShortcutFn = () => {};

    spyOn(service, 'emitShortcutFn');

    const resp = service.dispatchShortcut(SHORTCUTS.debugScreen);

    expect(resp).toBe(false);
    expect(service.emitShortcutFn).not.toHaveBeenCalled();
  });

  it('unsubscribe from hotkey should work', () => {
    const service: HotkeysService = TestBed.get(HotkeysService);
    const mock = {
      sub() {
        console.log('sub1');
      },
    };
    spyOn(mock, 'sub');

    const sub = service.addShortcut(SHORTCUTS.hotkeysHelp).subscribe(mock.sub);
    sub.unsubscribe();

    service.dispatchShortcut(SHORTCUTS.hotkeysHelp);

    expect(mock.sub).not.toHaveBeenCalled();
  });
});
