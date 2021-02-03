import { CasteManagementModule } from './caste-management.module';
import { CasteAuthService } from './caste-auth.service';
import { TestBed } from '@angular/core/testing';
import { CASTE_AUTH_CONFIG } from '../public-api';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDM4Nzc4OTcsImV4cCI6MTYwMzk2NDI5Nywicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfU1VQRVJfQURNSU4iLCJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJtYW5vbG9fc2EyIiwiaXAiOiIxNzYuODMuMjAwLjU0IiwiaWQiOiIyNzk3YTAyNy1lMmM3LTExZWEtYjUyMS0wMjQyMGEwMDAzMGIiLCJhcHBsaWNhdGlvbiI6eyJuYW1lIjoiTG9naWNUcmFkZXJzIChTdGFnZSkiLCJyZWFsbSI6ImRlZmF1bHQifSwicGVybWlzc2lvbnMiOlt7ImdyYW50cyI6WyJBQ0NPVU5UX1dPUktFUiIsIkFDQ09VTlRfTUFOQUdFUiIsIkFDQ09VTlRfVFJBREVSIl0sImFjY291bnQiOnsiaWQiOiIyNzk3ZDJmZC1lMmM3LTExZWEtYjUyMS0wMjQyMGEwMDAzMGIiLCJuYW1lIjoiMzYzNiJ9fSx7ImdyYW50cyI6WyJBQ0NPVU5UX1dPUktFUiIsIkFDQ09VTlRfTUFOQUdFUiJdLCJhY2NvdW50Ijp7ImlkIjoiMWJjY2E1M2UtZTJjOC0xMWVhLWI1MjEtMDI0MjBhMDAwMzBiIiwibmFtZSI6IjMxMzUyIn19XX0.caDFXE2l0_-tSEOUdm8t328mCeSgz11xMM0r-ys8HOj6tnkIFg0GFObC34jpx62Kzq8muim8Re-u_VJ8RffZ7N7yNK9xnb4lO5witKEvgsxdjakNfQjdzp2cPBgXW8dnbrwXDxSPwCV66MfHhyKUn3FMPsIganXJg_x1tD_PqlktqYGeaHyNjZOo0VSg3A8UIEUUY112JHVFxpLDED8t9fjehXTLm4Etjn3mQKPs_SDo1Ebchv31nky-iLdUqOtG4lUcKSkKq7Zp4_5cVrvzDlfzgQ5vLvFmuI6t2hEfQEGupAsK9lioqoZ92xiTGtpUsdvBu6iLX3SYcCs5fpzZywv4bpEC3ZiroFgEL4OuxeEg140U56p5H-hfV5V3Vovr4ZYUeo4waZBlH4f5PsKtahnWFvd08ITa6K5RO9sLfCEYaoYzgUF0gOrsUaKV-TuXRn-mvzj3e8xU1jvv-uc0cSCdfPTorLwyGWviJiAb5iNJpFkHEccXz868-IF2AsjAoT3RugPX8rDbtaDvK-SpDGh8rO60Nuoh3XmTNo1a1oOfSv3x3r7LOBNpXcTJZQM8VAxFiHlyhodbw0Vh_3qXr_kRKmlAKJuiFR0mEvIKmavyr6-YtpuzCRK2l__XysUGpMHV12Y2C-MiPGbjhrvkzDvIr6ua7FHJ9vRq8m-lsMI';

fdescribe('CasteAuthService', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
  }); beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [CasteManagementModule],
      providers: [
        {
          provide: CASTE_AUTH_CONFIG,
          useValue: {
            realm: 'default',
            url: 'url',
            baseHeaders: {
              accept: 'application/ld+json',
            },
          },
        },
      ],
    }),
  );

  it('should be created', () => {
    const service: CasteAuthService = TestBed.get(CasteAuthService);
    expect(service).toBeTruthy();
  });

  it('decodeToken', () => {
    expect(() => CasteAuthService.decodeToken(token)).not.toThrow();
  });
});
