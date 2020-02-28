import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as firebase from 'firebase-admin';

async function bootstrap() {
  // firebase.initializeApp({
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // })
  firebase.initializeApp({
    credential: firebase.credential.cert(process.env.FIREBASE_CREDENTIALS_PATH),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
