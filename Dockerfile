FROM node:carbon
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4200
CMD [ "node", "app.js" ]
