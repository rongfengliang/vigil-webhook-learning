FROM node:12.14.0-alpine3.9
ENV TINI_VERSION v0.18.0
WORKDIR /app
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
COPY .env /app/.env
COPY app.js /app/app.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh && chmod +x /tini && yarn 
#ENTRYPOINT [ "sh","/app/entrypoint.sh" ]
#ENTRYPOINT ["/tini", "--", "/app/entrypoint.sh"]

