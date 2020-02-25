FROM node:12

RUN apt-get update && \
    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.0

EXPOSE 9000
WORKDIR /usr/src/app

#COPY package.json .
COPY . .
RUN yarn

CMD ["yarn", "start"]
