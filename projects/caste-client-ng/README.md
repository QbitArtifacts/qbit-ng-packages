# Caste Client (Angular)

This project is an Angular client for [Caste](https://github.com/QbitArtifacts/caste)

> This is a work in progress

## Usage

For a full example see: [example project](../../src)

### Basic Usage

To get started add this to your projects AppModule

```typescript
// app.module.ts
import {
  CasteAuthModule,
  CASTE_AUTH_CONFIG,
} from '@qbitartifacts/caste-client-ng';

// Provide Caste config
const qbitCasteConfigProvider = {
    provide: CASTE_AUTH_CONFIG,
    useValue: {
        realm: 'default',
        url: 'https://api.caste.qbitartifacts.com',
    },
};

@NgModule({
    imports: [CasteAuthModule, /* and other modules */],
    providers: [qbitCasteConfigProvider]
});
```

#### Using auth service:

```typescript
import {
  CasteAuthService,
} from '@qbitartifacts/caste-client-ng';

@Component(...)
export class AppComponent {
    constructor(
        public qbitAuth: CasteAuthService,
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

#### Exported Modules

##### CasteAuthModule

Import this module if you need auth.

```ts
import { CasteAuthModule } from '@qbitartifacts/caste-client-ng';
```

##### CasteManagementModule

Import this module if you need management.

```ts
import { CasteManagementModule } from '@qbitartifacts/caste-client-ng';
```

#### Exported Services

##### CasteAuthService
This service offers authentication methods, ie: login, signup, etc.

```ts
import { CasteAuthService } from '@qbitartifacts/caste-client-ng';
```

##### CasteUsersService

```ts
import { CasteUsersService } from '@qbitartifacts/caste-client-ng';
```

##### CasteAccountsService

```ts
import { CasteAccountsService } from '@qbitartifacts/caste-client-ng';
```

##### CasteApplicationsService

```ts
import { CasteApplicationsService } from '@qbitartifacts/caste-client-ng';
```

##### CastePermissionsService

```ts
import { CastePermissionsService } from '@qbitartifacts/caste-client-ng';
```

## Status

Coverage reports:

<!-- BADGES_START -->

<!-- BADGES_END -->

> This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.
