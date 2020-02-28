FROM node:12

RUN apt-get update && \
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.0

EXPOSE 3000
WORKDIR /usr/src/app

#COPY package.json .
COPY . .

RUN yarn
#RUN npm rebuild --target=12.0.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary

CMD npm rebuild --target=12.0.0 --target_platform=linux --target_arch=x64 --target_libc=glibc --update-binary && yarn start:dev
