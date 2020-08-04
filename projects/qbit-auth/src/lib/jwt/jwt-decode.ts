import * as jwt_decode from 'jwt-decode';
import { map } from 'rxjs/internal/operators/map';
import { LoginResponseRaw } from '../interfaces/login_response.interface';
export function decodeJwt(token: string) {
  return jwt_decode(token);
}

export const mapJwtTokenAndAttach = map((data: LoginResponseRaw) => {
  const decoded = decodeJwt(data.token);
  return { ...decoded, token: data.token };
});
