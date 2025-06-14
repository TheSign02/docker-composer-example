FROM node:24.2

# create work directory
WORKDIR /usr/src/app

# copy current packages to the workdir and install npm packages
COPY package*.json ./
RUN npm install

# copy everything from here to our workdir
COPY . .

# documents the ports, docker image is expected to run on
EXPOSE 3000

CMD ["npm", "run", "dev"]