import { PermissionsDirective } from './permissions.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, TemplateRef, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import {
  CasteUserService,
  InternalPermission,
  PermissionAdmin,
  PermissionUser,
  MUserAdmin,
  MUserReadOnly,
  MUserUser,
} from '@qbitartifacts/caste-client-ng';

@Component({
  template: `<input id="element" type="text" *appPermissions="perm" />`,
})
class TestPermissionsUserComponent {
  public perm: InternalPermission = PermissionUser;
}

@Component({
  template: `<input id="element" type="text" *appPermissions="perm" />`,
})
class TestPermissionsAdminComponent {
  public perm: InternalPermission = PermissionAdmin;
}

describe('PermissionsDirective', () => {
  let user$: CasteUserService;
  let componentUser: TestPermissionsUserComponent;
  let componentAdmin: TestPermissionsAdminComponent;
  let fixtureUser: ComponentFixture<TestPermissionsUserComponent>;
  let fixtureAdmin: ComponentFixture<TestPermissionsAdminComponent>;

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermissionsDirective, TestPermissionsAdminComponent, TestPermissionsUserComponent],
      providers: [TemplateRef, CasteUserService],
    });

    fixtureUser = TestBed.createComponent(TestPermissionsUserComponent);
    componentUser = fixtureUser.componentInstance;

    fixtureAdmin = TestBed.createComponent(TestPermissionsAdminComponent);
    componentAdmin = fixtureAdmin.componentInstance;

    user$ = TestBed.get(CasteUserService);
  });

  it('should create an instance', () => {
    fixtureUser.detectChanges();
    expect(componentUser).toBeTruthy();
  });

  it('should handle permissions correctly (User with RoleUser and UserPermission) => can activate', () => {
    user$.setUser(MUserUser);
    fixtureUser.detectChanges();

    const elementRef = fixtureUser.debugElement.query(By.css('#element'));
    expect(elementRef instanceof DebugElement).toBeTruthy();
  });

  it('should handle permissions correctly (User with RoleAdmin and UserPermission) => can activate', () => {
    user$.setUser(MUserAdmin);
    fixtureUser.detectChanges();

    const elementRef = fixtureUser.debugElement.query(By.css('#element'));
    expect(elementRef instanceof DebugElement).toBeTruthy();
  });

  it('should handle permissions correctly (User with RoleReadOnly and UserPermission) => cannot activate', () => {
    user$.setUser(MUserReadOnly);
    fixtureUser.detectChanges();

    const elementRef = fixtureUser.debugElement.query(By.css('#element'));
    expect(elementRef instanceof DebugElement).not.toBeTruthy();
  });

  it('should handle permissions correctly (User with RolAdmin and AdminPermission) => can activate', () => {
    user$.setUser(MUserAdmin);
    fixtureAdmin.detectChanges();

    const elementRef = fixtureAdmin.debugElement.query(By.css('#element'));
    expect(elementRef instanceof DebugElement).toBeTruthy();
  });

  it('should handle permissions correctly (User with RolAdmin and AdminPermission) => can activate', () => {
    user$.setUser(MUserUser);
    fixtureAdmin.detectChanges();

    const elementRef = fixtureAdmin.debugElement.query(By.css('#element'));
    expect(elementRef instanceof DebugElement).not.toBeTruthy();
  });
});
