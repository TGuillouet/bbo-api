import {HttpException, HttpStatus, Injectable, NestMiddleware} from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const [ type, token ] = req.headers.authorization.split(' ');
    if (type && type === 'Bearer' && token) {
      firebase.auth().verifyIdToken(token)
          .then((decodedToken) => {
            res.locales.uid = decodedToken.uid;
            next();
          })
          .catch(error => {
            throw new HttpException('You token is not valid', HttpStatus.FORBIDDEN);
          });
    }
    throw new HttpException('Token is missing', HttpStatus.UNAUTHORIZED);
  }
}
