FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

COPY . .

CMD [ "node", "app.js" ]
