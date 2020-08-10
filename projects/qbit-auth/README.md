# QbitAuth

This project will hold all clases, services, components for QBit Authentication

> This is a work in progress

## Usage

For a full example see: [example project]()

### Basic Usage

To get started add this to your projects AppModule

```typescript
// app.module.ts
import {
  QbitAuthModule,
  QBIT_AUTH_CONFIG,
} from '@qbitartifacts/qbit-auth';

// Provide QBitAuth config
const qbitAuthConfigProvider = {
    provide: QBIT_AUTH_CONFIG,
    useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
    },
};

@NgModule({
    imports: [QbitAuthModule],
    providers: [qbitAuthConfigProvider]
});
```

Using auth service:

```typescript
import {
  QbitAuthService,
} from '@qbitartifacts/qbit-auth';

@Component(...)
export class AppComponent {
    constructor(
        public qbitAuth: QbitAuthService,
    ) {
        const signInReq = this.qbitAuth.signIn({
            username: 'username',
            password: 'password',
            realm: 'realm',
        }).subscribe(
            (resp) => {
                console.log('resp', resp);
            },
            (error: ApiError) => {
                console.log('error', error);
            }
        );
    }
}
```

## Status

Coverage reports:

<!-- BADGES_START -->

<!-- BADGES_END -->

> This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.
