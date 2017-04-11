FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app/
RUN npm install nodemon -g
RUN npm install gulp -g
RUN npm install
export PORT = 8080

EXPOSE 8080
CMD [ "gulp" ]
