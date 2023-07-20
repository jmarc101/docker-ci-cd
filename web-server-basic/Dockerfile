# Specify Base image
FROM node:lts-slim

# Set the working directory inside the container.
WORKDIR /app

# Copy the necessary files to the container (e.g., package.json and package-lock.json for Node.js projects).
# This allows Docker to take advantage of caching during the build process.
COPY ./package.json ./

# Install application dependencies. This step will be cached if package files don't change.
RUN npm install

# Copy the rest of your application's source code to the container.
# This step will most likely not be cached as your source code changes frequently.
# So we skip installing dependencies until after we copy the source code. So we tak advantage of caching.
COPY . .

# Default command
CMD ["npm", "start"]


# To run this container use the following command

# docker build -t jmarc101/webapp .
# docker run -p 5000:8080 -it jmarc101/webapp

# In browser go to localhost:5000

# 5000:8080 is the port mapping from the container to the local machine
# 5000 on local machine gets redirected to 8080 on the container