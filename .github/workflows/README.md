# GitHub Actions Workflow - Deploy client to AWS Beanstalk

This repository contains a GitHub Actions workflow that deploys a Dockerized client application to AWS Elastic Beanstalk.

## Workflow Details

The workflow triggers on every push to the `main` branch. It's comprised of the following jobs:

1. **Checkout Source code:** This step checks out the source code of the repository.

2. **Login to Docker:** Logs in to Docker using your Docker credentials, stored as secrets.

3. **Build client image:** Builds the Docker image of the client application using the Dockerfile.dev file.

4. **Run tests:** Runs any tests in the client application.

5. **Generate client deployment package:** Generates a zip file of the client application, excluding the .git files.

6. **Deploy to AWS Beanstalk:** Deploys the client application to AWS Elastic Beanstalk using the `einaregilsson/beanstalk-deploy` action.

## Running the Workflow

This workflow is automatically triggered whenever you push to the `main` branch. 

Make sure you have the following secrets set in your GitHub repository:

- DOCKER_USERNAME
- DOCKER_PASSWORD
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY


## License

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
