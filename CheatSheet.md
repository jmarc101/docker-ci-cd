## Docker Cheat Sheet

### Docker Basics

| Command | Description |
|---------|-------------|
| `docker pull image_name:tag` | Pull an Image |
| `docker images` | List Downloaded Images |
| `docker rmi image_name:tag` | Remove an Image |
| `docker ps` | List Running Containers |
| `docker ps -a` | List All Containers (Running and Stopped) |
| `docker stop container_id` | Stop a Running Container |
| `docker start container_id` | Start a Stopped Container |
| `docker restart container_id` | Restart a Container |
| `docker rm container_id` | Remove a Container |

### Docker Container Management

| Command | Description |
|---------|-------------|
| `docker run [options] image_name:tag [command]` | Create and Start a Container |
| `docker attach container_id` | Attach to a Running Container |
| `docker exec [options] container_id command` | Execute a Command in a Running Container |
| `docker cp [options] src_path container_id:dest_path` or `docker cp [options] container_id:src_path dest_path` | Copy Files between Host and Container |
| `docker logs [options] container_id` | View Container Logs |

### Docker Image and Container Cleanup

| Command | Description |
|---------|-------------|
| `docker container prune` | Remove Stopped Containers |
| `docker image prune` | Remove Unused Images |
| `docker system prune -a` | Remove All Unused Data (Containers, Images, Volumes, and Networks) |

### Docker Networking

| Command | Description |
|---------|-------------|
| `docker network ls` | List Networks |
| `docker network create network_name` | Create a Custom Bridge Network |
| `docker network connect network_name container_id` | Attach a Container to a Network |
| `docker network disconnect network_name container_id` | Detach a Container from a Network |

### Docker Compose

| Command | Description |
|---------|-------------|
| `docker-compose up [options]` | Compose Up (Start Services) |
| `docker-compose down` | Compose Down (Stop Services) |
| `docker-compose logs [service_name]` | Compose Logs (View Service Logs) |

### Docker Volume Management

| Command | Description |
|---------|-------------|
| `docker volume create volume_name` | Create a Volume |
| `docker volume ls` | List Volumes |
| `docker volume rm volume_name` | Remove a Volume |

### Docker Registry and Login

| Command | Description |
|---------|-------------|
| `docker push image_name:tag` | Push an Image to a Registry |
| `docker login registry_url` | Login to a Docker Registry |
| `docker logout registry_url` | Logout from a Docker Registry |

Remember that these are just a few of the most commonly used Docker commands and concepts. Docker offers a wide range of options and features to explore. For a more comprehensive reference, you can always refer to the official Docker documentation: [Docker Documentation](https://docs.docker.com/)
