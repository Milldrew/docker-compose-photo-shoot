FROM node:16

WORKDIR /usr/src/app

COPY ./docs/ ./docs/
COPY ./app.js ./
COPY ./package.json ./
RUN yarn install --production

EXPOSE 8080

CMD ["node", "app.js"]

