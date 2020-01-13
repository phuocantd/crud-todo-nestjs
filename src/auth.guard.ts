import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { headers } = context.switchToHttp().getRequest();
    const token = headers.authorization;
    let result = true;
    jwt.verify(
      token.split(' ')[1],
      process.env.JWT,
      (err: any, payload: any) => {
        if (payload) {
          console.log(payload);
          result = true;
        } else {
          result = false;
        }
      },
    );
    return result;
  }
}
