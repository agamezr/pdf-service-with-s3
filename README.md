#  PDF Generation Microservice

This microservice allow generate a pdf file and upload it automatically to an Amazon S3 bucket.

---

## Functionalities

- PDF file generation.
- Automatic upload to an Amazon S3 bucket.
- Contenedor Docker listo para producción o desarrollo.
- Preparado para escalar o integrarse como parte de un sistema de microservicios.

---

##  Main technologies and libraries

| Technology     | Use                                                    |
|----------------|--------------------------------------------------------|
| **Node.js**    | Base of the microservice.                              |
| **Express.js** | Framework to define routes and manage petitions.      |
| **aws-sdk**    | Official AWS client to integrate services, in this case S3.      |
| **Docker**     | Packaging the microservice into a container.       |
| **Docker Compose** | Local container orchestration and configuration. |

---



### Below are the steps to set up and run the project on your local environment.

---

## Prerequisites

Before you get started, make sure you have the following installed on your machine:

- **docker**
- **docker compose**

### Notes
Using the ```docker compose``` or ```docker-compose``` command will depend on your version and configuration of docker compose.

---

## Installation

Follow these steps to set up your development environment:

### 1.  Clone repository
Clone this repository from GitHub.com to your local computer

```bash
git clone https://github.com/agamezr/pdf-service-with-s3.git
```

```bash
cd pdf-service-with-s3
```

### 2. Create the .env file at the root of the project

```bash
AWS_ACCESS_KEY_ID=           # your-access-key
AWS_SECRET_ACCESS_KEY=       # your-secret-key
AWS_REGION=                  # us-west-2
AWS_S3_BUCKET=               # pdf-reports-dev
```


### 3. Build the project
Docker must be running and your console must be in the project path

```bash
docker compose build
```

### 4. Run the project
This command runs the container

```bash
docker compose up
```

----

## Daily Work

### 1. Work with Postman

In the root path of the project you can find a postaman collection in json format


Open your Postman client and import a collection


```bash
file:  pdf service.postman_collection.json
```
