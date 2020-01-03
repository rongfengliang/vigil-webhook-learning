FROM node:12.14.0-alpine3.9
WORKDIR /app
COPY .env /app/.env
COPY app.js /app/app.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN  yarn 
ENTRYPOINT [ "yarn","start" ]


