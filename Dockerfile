FROM node:16

WORKDIR /sequelize-example
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev