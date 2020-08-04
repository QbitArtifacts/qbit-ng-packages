import { Component } from '@angular/core';
import {
  QbitAuthService,
  QbitManagementService,
} from 'projects/qbit-auth/src/public-api';
import { ApiError } from 'projects/qbit-auth/src/lib/interfaces/api_error.interface';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qbit-ng-packages';

  constructor(
    public qbitAuth: QbitAuthService,
    public qbitManagement: QbitManagementService
  ) {
    this.handleResponse(this.qbitManagement.getApplicationsList());
    this.handleResponse(
      this.qbitManagement.getApplicationById(
        'af0a4d53-5773-44f1-998c-6f4e340fd849'
      )
    );
  }

  public signIn() {
    const signInReq = this.qbitAuth.signIn({
      username: 'manolo',
      password: 'test123',
      realm: 'default',
    });
    this.handleResponse(signInReq);
  }

  public signUp() {
    const signUpReq = this.qbitAuth.signUp({
      username: 'manolo',
      password: 'test123',
      realm: 'default',
    });

    this.handleResponse(signUpReq);
  }

  public handleResponse(req: Observable<any>) {
    req.subscribe(
      (resp) => {
        console.log('resp', resp);
      },
      (error: ApiError) => {
        console.log('error', error);
      }
    );
  }
}
