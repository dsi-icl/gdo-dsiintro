FROM node:10
WORKDIR /app

COPY package.json .
RUN npm install pm2@latest -g
RUN npm install

COPY . .

ENTRYPOINT sudo PORT=5000 pm2 start app.js -n "dsiintro" -f
