FROM node:10
WORKDIR /app

COPY package.json .
RUN npm install pm2@latest -g
RUN npm install

COPY . .

ENTRYPOINT PORT=5000 pm2-runtime app.js -n "dsiintro" -f
