FROM node:15-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npx prisma generate

CMD [ "npm", "run", "dev:migrate" ]