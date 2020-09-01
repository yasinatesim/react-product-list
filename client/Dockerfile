FROM node:12

WORKDIR /usr/app/client

COPY ./package.json /usr/app/client

RUN yarn install

COPY . /usr/app/client

EXPOSE 3000

CMD ["yarn", "start"]
