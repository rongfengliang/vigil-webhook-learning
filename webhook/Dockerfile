FROM node:12.14.0-alpine3.9
WORKDIR /app
LABEL AUTHOR="dalongrong"
RUN apk add --no-cache tini
RUN  yarn global add 0x
COPY .env /app/.env
COPY app.js /app/app.js
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh && yarn 
#ENTRYPOINT [ "sh","/app/entrypoint.sh" ]
#ENTRYPOINT ["/sbin/tini", "--", "yarn app.js"]
#ENTRYPOINT ["0x","-D","flame","app.js" ]
#ENTRYPOINT [ "/usr/local/bin/node", "--prof","--logfile=","%p-v8.log", "--print-opt-source", "-r", "/app/node_modules/0x/lib/preload/no-cluster", "-r", "/app/node_modules/0x/lib/preload/redir-stdout", "-r", "/app/node_modules/0x/lib/preload/soft-exit", "app.js" ]
ENTRYPOINT [ "yarn","start" ]

