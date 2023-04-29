FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

COPY . /app

RUN npm install

RUN npx prisma init --provider=mysql

COPY prisma/schema.prisma ./prisma/

RUN npx prisma generate

RUN npx prisma migrate deploy

RUN npm run seed

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]