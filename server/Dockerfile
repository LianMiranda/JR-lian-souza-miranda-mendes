FROM node:latest

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["sh", "-c", "npm run migrate && npm run start"]

EXPOSE 3000