import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebase from 'firebase-admin';

async function bootstrap() {
  firebase.initializeApp({
    credential: firebase.credential.cert(process.env.FIREBASE_CREDENTIALS_PATH),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
