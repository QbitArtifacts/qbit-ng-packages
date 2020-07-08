import { TestBed } from '@angular/core/testing';

import { QEventsService } from './events.service';
import { EventEmitter } from '@angular/core';

describe('QEventsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [QEventsService],
    })
  );

  it('should be created', () => {
    const service: QEventsService = TestBed.get(QEventsService);
    expect(service).toBeTruthy();
  });

  it('should subscribe', () => {
    const service: QEventsService = TestBed.get(QEventsService);
    const sub = service.on('test');
    expect(sub).toBeTruthy();
    expect(sub instanceof EventEmitter).toBeTruthy();
  });

  it('should fire correctly', () => {
    const service: QEventsService = TestBed.get(QEventsService);
    const mock = {
      sub: () => {},
      done: () => {},
    };
    spyOn(mock, 'done');
    spyOn(mock, 'sub');

    const sub = service.on('test').subscribe(mock.sub);
    service.fire('test', ['args'], mock.done);

    expect(mock.sub).toHaveBeenCalledWith(['args']);
    expect(mock.done).toHaveBeenCalled();
  });

  it('should handle not found events correctly', () => {
    const service: QEventsService = TestBed.get(QEventsService);
    const result = service.fire('test', ['args']);
    expect(result).toBeNull();
  });

  it('.off should work', () => {
    const service: QEventsService = TestBed.get(QEventsService);

    const mock = {
      sub: () => {},
    };
    spyOn(mock, 'sub');
    service.on('test').subscribe(mock.sub);
    service.off('test');
    service.fire('test');

    expect(mock.sub).not.toHaveBeenCalled();
  });
});
