FROM node:10.8-alpine

WORKDIR /app

COPY . .

RUN npm install

WORKDIR /src

ENTRYPOINT ["/app/bin/cli.js"]
CMD []
