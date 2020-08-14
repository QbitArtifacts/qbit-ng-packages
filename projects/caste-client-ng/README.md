# Caste Client (Angular) <!-- omit in toc -->

This project is an Angular client for [Caste](https://github.com/QbitArtifacts/caste)

> This is a work in progress

## Table Of Contents <!-- omit in toc -->

- [Getting Started](#getting-started)
  - [Install](#install)
  - [Setup](#setup)
  - [Basic Usage](#basic-usage)
- [Exported Modules](#exported-modules)
  - [CasteAuthModule](#casteauthmodule)
  - [CasteManagementModule](#castemanagementmodule)
- [Exported Services](#exported-services)
  - [CasteAuthService](#casteauthservice)
  - [CasteUsersService](#casteusersservice)
  - [CasteAccountsService](#casteaccountsservice)
  - [CasteApplicationsService](#casteapplicationsservice)
  - [CastePermissionsService](#castepermissionsservice)
- [Status](#status)

## Getting Started

> _For a full example see: [example project](../../src)_

### Install

First, you will need to authenticate against Github npm packages to be able to install package, see [this][gh-npm-install]

You can either add a dependency to your package.json, change to the latest version.

```json
{
    "dependencies": {
        ...
        "@qbitartifacts/caste-client-ng": "<latest_version>"
    }
}
```

Or install from cmd:

```
$ npm install @qbitartifacts/caste-client-ng
```

### Setup

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

### Basic Usage

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

## Exported Modules

### CasteAuthModule

Import this module if you need auth.

```ts
import { CasteAuthModule } from '@qbitartifacts/caste-client-ng';
```

### CasteManagementModule

Import this module if you need management.

```ts
import { CasteManagementModule } from '@qbitartifacts/caste-client-ng';
```

## Exported Services

### CasteAuthService

This service offers authentication methods, ie: login, signup, etc.

```ts
import { CasteAuthService } from '@qbitartifacts/caste-client-ng';
```

### CasteUsersService

```ts
import { CasteUsersService } from '@qbitartifacts/caste-client-ng';
```

### CasteAccountsService

```ts
import { CasteAccountsService } from '@qbitartifacts/caste-client-ng';
```

### CasteApplicationsService

```ts
import { CasteApplicationsService } from '@qbitartifacts/caste-client-ng';
```

### CastePermissionsService

```ts
import { CastePermissionsService } from '@qbitartifacts/caste-client-ng';
```

## Status

Coverage reports:

<!-- BADGES_START -->

<!-- BADGES_END -->

> This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

<!-- Links -->

[gh-npm-auth]: https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages
[gh-npm-install]: https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#installing-a-package
