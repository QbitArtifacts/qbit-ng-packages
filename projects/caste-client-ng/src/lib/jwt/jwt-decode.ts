import jwt_decode from 'jwt-decode';
import { map } from 'rxjs/internal/operators/map';
import { LoginResponseRaw, LoginResponse } from '../interfaces/login_response.interface';


export function decodeJwt(token: string): LoginResponse {
  const decoded = jwt_decode(token);
  return { ...decoded, token };
}

export const mapJwtTokenAndAttach = map((data: LoginResponseRaw) => decodeJwt(data.token));
