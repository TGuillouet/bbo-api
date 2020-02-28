import {HttpException, HttpStatus, Injectable, NestMiddleware} from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
      if (req.headers.authorization) {
          const [type, token] = req.headers.authorization.split(' ');
          if (type && type === 'Bearer' && token) {
              firebase.auth().verifyIdToken(token)
                  .then((decodedToken) => {
                      res.locals.uid = decodedToken.uid;
                      next();
                  })
                  .catch(error => {
                      res.status(403).json({message: 'Error while validating your token', status: HttpStatus.FORBIDDEN});
                  });
          } else {
              throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
          }
      } else {
          throw new HttpException('Token is missing', HttpStatus.BAD_REQUEST);
      }
  }
}
