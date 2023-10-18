FROM node:20.6.1-alpine3.18

WORKDIR /home/node/app

COPY . .

EXPOSE 5173
CMD [ -d "node_modules" ] && yarn dev || yarn install && yarn dev