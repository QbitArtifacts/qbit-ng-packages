import * as jwt_decode_ from 'jwt-decode';
import { map } from 'rxjs/internal/operators/map';
import { LoginResponseRaw } from '../interfaces/login_response.interface';

// tslint:disable-next-line: variable-name
const jwt_decode = jwt_decode_;

export function decodeJwt(token: string) {
  return jwt_decode(token);
}

export const mapJwtTokenAndAttach = map((data: LoginResponseRaw) => {
  const decoded = decodeJwt(data.token);
  return { ...decoded, token: data.token };
});
