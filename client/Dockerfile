# Multi-step build process to reduce image size (for production)
# Build phase

# 'as builder' is optional, but it's a good practice to name the phase
FROM node:lts-slim as builder 
WORKDIR "/app"
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Run phase (production) - copy build folder from builder phase
# Copy path is from nginx documentation https://hub.docker.com/_/nginx 
FROM nginx
# EXPOSE is for AWS Elastic Beanstalk to know which port to map
EXPOSE 80 
COPY --from=builder /app/build /usr/share/nginx/html
# default command of nginx image starts nginx, so no need to specify it here