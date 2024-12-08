
# Docker Demo Project
---
This repository demonstrates the use of Docker for containerizing a full-stack application, consisting of a React frontend, a Node.js backend, and a MongoDB database. It showcases how Docker simplifies application deployment by creating isolated, portable, and reproducible environments for each component of the stack.

<hr>

# What is Docker?
Docker is an open-source platform designed to automate the deployment of applications as lightweight, portable containers. Containers encapsulate an application and its dependencies, ensuring consistent behavior across different environments.

## Key benefits of Docker:
- **Isolation**: Each container runs independently with its own libraries and dependencies.

- **Portability**: Containers can run anywhere—on your local machine, in a cloud environment, or on a production server.

- **Simplified Deployment**: Containers streamline deployment, scaling, and versioning of applications.


---


# Folder Structure
<code>frontend/</code>: Contains the React application and its Dockerfile.

<code>backend/</code>: Contains the Node.js application and its Dockerfile.

<code>docker-compose.yml</code>: Defines how to run multiple services (frontend, backend, and MongoDB) together.

--- 

## Frontend Setup
The frontend is a React application built and served using Nginx.

### Dockerfile stages
- Builder Stage:

    - <code>node:18</code> is used to build the React app.

    - Application dependencies are installed, and the project is built using npm run build.

- Production Stage:
    - Uses an Nginx base image to serve the built React app.

    - Copies the build artifacts from the builder stage into the Nginx container.


<br>

## Backend Setup
The backend is a Node.js application that connects to MongoDB using Mongoose.

### Dockerfile stages
- Builder stages
    - <code>node:18</code> is used as the base image.

    - Application dependencies are installed, and the source code is copied into the container.
    
    - The backend service runs on port 3000, which is exposed to the host.

<br>

## Database Setup
The MongoDB service is included as part of the Docker Compose setup using the official mongo image.

### MongoDB Highlights:

- Data Persistence: A volume <code>(db-data)</code> is attached to persist database data across container restarts.

- Connection URL: The backend connects to MongoDB using the URL: <code>mongodb://mongo:27017/my_database</code>.

---
<br>

# Using Docker Compose
The docker-compose.yml file orchestrates the frontend, backend, and database services.

## Key Services of Docker Compose:
### Frontend Service:

- Builds the React app using the frontend/Dockerfile.

- Exposes the application on http://localhost:3001.

- Sets the environment variable 

- REACT_APP_BACKEND_URL to connect to the backend.

### Backend Service:

- Builds the Node.js app using the backend/Dockerfile.

- Exposes the application on http://localhost:3333.

- Connects to the MongoDB service via the MONGODB_URI environment variable.

### MongoDB Service:

- Uses the official mongo image.

- Exposes the MongoDB instance on localhost:27017.

- Stores data persistently in the db-data volume.

---
<br>

# How to Run the Project
**Prerequisites:-**

Docker and Docker Compose should be installed in your system. (Refer Official Documentation for instructions to install Docker and Docker Compose)

## Steps

### 1.Clone the repository:
```bash
git clone https://github.com/thejas-dev/Docker-Learn
cd project-root
```

## 2.Build and start the containers:

```bash
docker-compose up --build
```

## 3.Access the services:

### Frontend: http://localhost:3001
### Backend: http://localhost:3333

## 4.Stop the containers:

```bash
docker-compose down
```

---

# Conclusion
## This demo showcases:

- <code>Frontend</code>: Built and served using Nginx.

- <code>Backend</code>: A Node.js app connected to MongoDB.

- <code>Database</code>: MongoDB service running in a container with persistent storage.

- <code>Docker Compose</code>: Simplifies the management of multiple services by orchestrating the frontend, backend, and database.

- <code>Docker Compose</code> makes it easy to deploy and manage complex multi-container applications with minimal effort.

---

Thats all, thank you!
