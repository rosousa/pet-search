FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env.local .

RUN npm run build

RUN npm install -g serve

EXPOSE 3333

CMD [ "serve", "-s", "dist", "-l", "3333" ]