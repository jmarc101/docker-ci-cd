# Dockerized React Project

This repository contains a Dockerized React application. While there are only minor changes in the React application itself, the primary focus is to provide a seamless CI/CD flow using Docker and Docker Compose.

## Changes in React Application

No important changes in react as this is essentially just a place holder to run docker flow.
- ...

## Requirements

- Docker
- Docker Compose

## Running the Application

To run the application, use the following commands:

```sh
# Build the Docker image
docker-compose -f docker-compose.dev.yml build

# Start the Docker container
docker-compose -f docker-compose.dev.yml up

```
The `-f` option allows you to specify an alternate compose file. By default, Docker Compose looks for a file named `docker-compose.yml` in the current directory. By using `-f docker-compose.dev.yml`, you're telling Docker Compose to use the `docker-compose.dev.yml` file instead.


The application will now be accessible at `localhost:8080`.

## CI/CD Pipeline

The CI/CD pipeline for this project revolves around Docker and Docker Compose. Whenever code is pushed to the repository, the following steps are performed:

1. The Docker image for the application is built.
2. The Docker container for the application is started and run.
3. Any configured tests are run against the running application.
4. If all tests pass and the application runs successfully, the new Docker image is published to the Docker registry.

Further details about the CI/CD pipeline can be found in [github Actions workflow yaml](../.github/workflows/README.md).

## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
