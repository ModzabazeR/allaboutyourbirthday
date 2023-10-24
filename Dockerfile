FROM node:20.6.1-alpine3.18

WORKDIR /home/node/app

COPY . .

RUN yarn install --immutable
RUN yarn build

USER node:node

EXPOSE 3000

CMD ["node", "-r", "dotenv/config", "build"]