# Dev.to Clone - Backend

This repository contains the backend code for a clone of the dev.to website. The main focus is to provide the following features:

1. **Post Management:** Allow creation, updating, deletion, retrieval of post details and retrieval of all posts. Each post should have a reference to the writer it belongs to. Allow adding, updating, and deleting comments for a post.
2. **User Management:** Allow creation, updating, deletion, retrieval of user details and retrieval of all writers. Each user should have the following attributes: [name, date they joined the platform, bio, nationality].
3. **User Authentication:** Allow users to login.
4. **Authorization:** Allow authorization for Post (Create, Update, Delete, Retrieve) and User (Update, Delete, Retrieve) services.

## Tech Stack

The backend is built with Node.js and the following frameworks and libraries:

- Express.js: a popular web framework for Node.js
- Mongoose: an Object Data Modeling (ODM) library for MongoDB and Node.js
- JSON Web Tokens (JWT): a standard for creating secure and verifiable access tokens

## API Documentation

The API documentation can be found [here](https://dev.to-clone-backend.herokuapp.com/api-docs/) and was generated using Swagger.

## Installation

1. Clone this repository: `git clone https://github.com/MaestroMiyagi/Kodemia-24JS-Dev.to-Back-End-Challenge`
2. Install the dependencies: `npm install`
3. Create a `.env` file at the root of the project and add the required environment variables (see `.env.example` for an example)
4. Start the server: `npm start or npm dev if you want to use nodemon`

## License

This project is licensed under the [MIT license](LICENSE).

### Authors

- [Jesús Mendoza](https://github.com/JesusMendoza815)
- [Kim Raco](https://github.com/KimRaco)
- [Manuel Dominguez](https://github.com/ETERNALPSY)
- [Iyari Maldonado](https://github.com/MaestroMiyagi)
