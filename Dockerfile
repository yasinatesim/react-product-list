FROM node:lts

WORKDIR /app

COPY . /app

CMD ["yarn", "setup"]
