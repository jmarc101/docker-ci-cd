# Base 
FROM node:lts-slim

# change working directory
WORKDIR /usr/src

# copy package.json and package-lock.json
COPY package.json ./

# install dependencies
RUN npm install

# copy all files
COPY . .

# Command to run the app
CMD ["npm", "start"]
