FROM node:12

RUN apt-get update && \
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.0

EXPOSE 3000
WORKDIR /usr/src/app

COPY . .
RUN yarn

CMD ["yarn", "start"]
