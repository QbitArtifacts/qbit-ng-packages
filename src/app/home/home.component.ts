import { Component, OnInit } from '@angular/core';
import { QSnackBar } from 'projects/qbit-kit-ng/src/public-api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public snackbar$: QSnackBar) {}

  ngOnInit() {
    console.log('hopme page')
    this.snackbar$.open('Test from home!!!');
  }
}
