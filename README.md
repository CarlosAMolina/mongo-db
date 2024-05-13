## Introduction

Project to learn MongoDB.

## Configure the project

See [this README.md file](https://github.com/CarlosAMolina/pre-commit-js/blob/main/README.md).

## Run MongoDB

We follow [this tutorial](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/):

```bash
docker pull mongodb/mongodb-community-server:latest
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest
```

## Run script

```bash
npm run db 
```

## Resources

[Frontend Masters course](https://frontendmasters.com/courses/mongodb)
[Frontend Masters course GitHub](https://github.com/FrontendMasters/intro-mongo-db)
