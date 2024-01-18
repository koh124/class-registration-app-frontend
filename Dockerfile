FROM node:16

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install -g http-server

RUN npm install

RUN npm run build

CMD http-server ./dist
