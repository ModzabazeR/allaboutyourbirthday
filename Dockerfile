FROM node:20.6.1-alpine3.18

RUN apk update && apk add --no-cache git

WORKDIR /home/node/app

COPY . .
RUN yarn install

EXPOSE 5173
CMD ["yarn", "dev"]