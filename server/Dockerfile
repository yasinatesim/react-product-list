FROM node:12

WORKDIR /usr/app/server

COPY ./package.json /usr/app/server

RUN yarn install

COPY . /usr/app/server

EXPOSE 4000

CMD ["yarn", "start"]
