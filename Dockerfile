FROM node:lts

WORKDIR /app

COPY . /app

RUN yarn install

CMD ["yarn", "setup"]
