FROM node:12.14.0-alpine3.9
WORKDIR /app
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk add --no-cache tini
RUN  yarn global add 0x
COPY .env /app/.env
COPY app.js /app/app.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh && yarn 
#ENTRYPOINT [ "sh","/app/entrypoint.sh" ]
ENTRYPOINT ["/sbin/tini", "--", "/app/entrypoint.sh"]
#ENTRYPOINT [ "0x","app.js" ]

