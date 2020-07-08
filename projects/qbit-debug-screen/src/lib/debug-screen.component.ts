import { Component, OnInit, Input } from '@angular/core';
import { DebugScreenService } from './debug-screen.service';

@Component({
  selector: 'ds-debug-screen',
  templateUrl: './debug-screen.html',
})
export class DebugScreenComponent implements OnInit {
  @Input() position = 'bottom-right';
  @Input() opened = true;

  constructor(public service: DebugScreenService) {}

  ngOnInit() {}
}
