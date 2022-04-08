# e-Wallet Application

This application consists of a basic e-Wallet system, in which a user can create and manipulate digital assets. 

The backend was implemented with Java 11 and SpringBoot, using Maven for dependency management and MongoDB as the database. User authentication is achieved using Spring Security with stateless jwt token authentication. The architecture follows the principles of the Clean Architecture, ilustrating concepts such as the single responsibility principle, layer isolation and decoupling.

A simple frontend was implemented using React, Redux and React Bootstrap. Http requests are made to the backend using the Axios package.
The user, once properly registered and logged in, can create wallets, insert and remove funds, and delete them through the frontend. The balance of each wallet can never go bellow zero, which means that requests to either withdraw or transfer more funds than the wallet contains won't be executed. The functionality of transfering funds from one wallet to another was implemented in the backend but due to time constraints wasn't reflected in the frontend.

A Postman collection with a pseudo-documentation of the backend api is also available in the root of the project. After creating a user with the `Create User` request, authenticate using the `Authenticate` request. The `jwt` token received in the response body should then be used in the `Authorization` header of the other requests. 
 
Each piece of the project (frontend, backend, database) is dockerized and orchestrated through docker-compose. Having Docker installed, all one has to do to run the application is go to the root of the project and run the command:
```
docker-compose up --build
```

This will create a MongoDB instance on localhost:27017, build and expose the backend api on localhost:8080 and attach it to the database, and build the frontend app and expose it on localhost:3000.

There are a lot of possible improvements to this project, of course. Namely backend test coverage, a nice Swagger API documentation and better exception handling. But overall this was a pretty fun little project and I learned a lot on the way.

Hope to hear from you guys soon!

All the best.
