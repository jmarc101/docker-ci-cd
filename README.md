# docker-project

Small Docker project with documentation of my learnings 

<br>

# Docker Syntax 
###### * __apk__ is a package manager for alpine
| Instruction telling docker server what to do | Argument to the instruction     | Explanation                                             | 
|----------------------------------------------|---------------------------------|---------------------------------------------------------|
| FROM                                         | Alpine                          | Use an existing docker image as a base                  |
| RUN                                          | apk add --update redis          | Download and install a dependency                       |
| CMD                                          | redis-server                    | Tell the image what to do when it starts as a container |


<br>
<br>

  
# Why Docker Creates Intermediate Containers Between Each Step

When you build a Docker image using a Dockerfile, Docker creates an **intermediate container** for each step specified in the Dockerfile. These intermediate containers are temporary and used during the build process to execute each instruction in the Dockerfile. This approach is part of Docker's build optimization strategy and helps improve image layer caching and build efficiency.

Here's why Docker creates intermediate containers between each step:

1. **Isolation and Reproducibility**: Each instruction in the Dockerfile represents a specific action, such as installing software, copying files, or running commands. By creating an intermediate container for each instruction, Docker ensures that the changes made by one instruction do not affect subsequent instructions. This provides better isolation and reproducibility during the image build process.

2. **Layer Caching**: Docker uses a layered file system for images, and each instruction in the Dockerfile creates a new layer. When you make changes to an existing image, Docker can reuse the cached intermediate layers if the Dockerfile hasn't changed. This saves time during subsequent builds because Docker can skip the steps that haven't changed, and only the modified instructions create new layers.

3. **Incremental Building**: When you modify your application code or the Dockerfile, Docker will only rebuild the steps affected by those changes, along with any subsequent steps. The unaffected steps can be fetched from the cache. This incremental building approach speeds up the build process, especially for larger and more complex images.

4. **Cleanup**: Once an instruction in the Dockerfile is completed, Docker commits the changes to an intermediate container, creating a new image layer. Then, the temporary container is removed. This cleanup process ensures that the intermediate containers are not retained after the build, saving disk space and reducing clutter.

Overall, the use of intermediate containers in the Docker build process is an essential part of Docker's optimization and caching mechanisms. It helps reduce build times, increases efficiency, and ensures that Docker images are reproducible and reliable.
