import * as jwt_decode_ from 'jwt-decode';
import { map } from 'rxjs/internal/operators/map';
import { LoginResponseRaw, LoginResponse } from '../interfaces/login_response.interface';

// tslint:disable-next-line: variable-name
const jwt_decode = jwt_decode_;

export function decodeJwt(token: string): LoginResponse {
  const decoded = jwt_decode(token);
  return { ...decoded, token };
}

export const mapJwtTokenAndAttach = map((data: LoginResponseRaw) =>
  decodeJwt(data.token)
);
