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
    try {
      jwt.verify(token.split(' ')[1], process.env.JWT);
      return true;
    } catch (err) {
      console.log('ERROR: ' + err);
      return false;
    }
  }
}
