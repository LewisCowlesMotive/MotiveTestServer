FROM spokedev/node_base:alpine

RUN apk add -U python make

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# Bundle app source
COPY ./index.js  ./
COPY ./src ./src/

RUN npm install --production 

EXPOSE 4000
CMD ["npm", "start"]
