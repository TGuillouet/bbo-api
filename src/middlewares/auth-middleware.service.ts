import { Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const [ type, token ] = req.headers.authorization.split('\s');
    if (type && type === 'Bearer' && token) {
      firebase.auth().signInWithCustomToken(token);
      next();
    }
  }
}
