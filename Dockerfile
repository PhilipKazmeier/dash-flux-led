FROM hypriot/rpi-node:latest

WORKDIR /home/app

# Install dependencies
RUN apt-get update \
	&& apt-get install libpcap-dev \
	&& rm -rf /var/lib/apt/lists/*

# Install all required npm packages
COPY package.json .
RUN npm install

# Run app.js on startup of the container
COPY app.js .
CMD npm start