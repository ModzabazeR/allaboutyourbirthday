FROM node:20.6.1-alpine3.18

WORKDIR /home/node/app

COPY . .
RUN yarn install

EXPOSE 5173
CMD ["yarn", "dev"]