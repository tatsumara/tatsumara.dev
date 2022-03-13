FROM node:alpine

WORKDIR /usr/src/tatsumara-web

COPY package.json ./
RUN npm install

COPY . ./

CMD ["node", "index.js"]