import { Component, Input, OnInit } from '@angular/core';
import { User } from '@qbitartifacts/caste-client-ng';
import { Env, environment } from 'src/environments/environment';

@Component({
  selector: 'app-caste-link',
  templateUrl: './caste-link.component.html',
  styleUrls: ['./caste-link.component.scss'],
})
export class CasteLinkComponent implements OnInit {
  @Input() user: User;
  @Input() env: Env = environment;

  public casteLink = '';

  constructor() {}

  ngOnInit(): void {
    this.casteLink = `${this.env.caste.panelUrl}/users/${this.user.id}?realm=${this.env.caste.realm}`;
  }
}
