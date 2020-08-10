import { Component } from '@angular/core';
import {
  QbitAuthService,
  QbitManagementService,
} from 'projects/qbit-auth/src/public-api';
import { ApiError } from 'projects/qbit-auth/src/lib/interfaces/api_error.interface';

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
    this.signIn();
    // this.handleResponse(this.qbitManagement.getApplicationsList());
    // this.handleResponse(
    //   this.qbitManagement.getApplicationById(
    //     'af0a4d53-5773-44f1-998c-6f4e340fd849'
    //   )
    // );
  }

  public validateAuth() {
    const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTY2MTc4NjQsImV4cCI6MTU5NjYyMTQ2NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFub2xvIn0.nw2aZfT1MJ5S28HcaJTZx0YJQwsbqLFq0bckjmGn3hXSLhsIInPT6m2ZeFI1C4iE5Lkt1qtcdp-HGiCR4YDgcqFrAIRX7uB4kc0TfcvT6FweoWatrMyr5P9SdyfaRPjsxdBu98gaMhcHbQ3j2t27CsmHpbe3p5Zpm_gsi9urM0r0SifEcH-zedxNMuw6hazNvXAEA6Qzz97g4b-lzltYMFDKJXENQtzBcY2kNA-4o1VAS8z2EUgkK2KIsrph5aJICK9a8XTw5_Q7yaNL0Jf4k9Ky4is3vhdyDNiinQgHDy9QE1WGwt9Umz2-wXXjOOTtlX8dMdKcdcSxx53w4F-XOsi9CpDVr_JNc3wGDsNlRnsyCjEWVU5zB6fdJC10TFA7TWMrw8Ca2Xc5ki6tnFXZt24VdlQfEWUp5QVfsPE0GUMhH-uctqwl7gT7lD1X3Inhrq2-4r2O77o56D5CFWPFr90kdNhlJWvUXccBBSLpoWCAeTg6e8I00_EF0-v0E4dWFrRM_vjhGv17rW0fiP17PNIiryywtRAteBmbYtkbzR0pe7F4yBb41Hrs49ZBs5iy7y0CA4utSJbh8f08W4kOPIlrNZ9oEh05iAUCSAwRVWFbmv7RcOMGeQlzujYORtSi6aKz8w0x7kBj-0UFUhUUaQM82S2vchAEwbd_sGCsyfc';

    const isValid = QbitAuthService.isTokenValid(token);
    console.log({ isValid });
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

  public handleResponse(req) {
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
