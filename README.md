# character/Supers API

*This is a RESTful API that provides data on Superheroes or Supers as we refer to them, using Node.js, Express.js, and MongoDB*

## Setup:
* Install Node.js and MongoDB.
* Clone the repository and navigate to the project directory.
* Run npm install to install the required dependencies.
* Start the MongoDB server.
* Seed the database with character data by running the seed.js script with npm run seed.

Usage
* To start the server, run npm start or npm run dev

| Route                          | HTTP Method | Description                                                |
| ------------------------------| -----------| -----------------------------------------------------------|
| /characters               | GET        | Returns all characters.                                    |
| /characters/:id           | GET        | Returns a character with the specified ID.                |
| /characters/name/:name    | GET        | Returns a character with the specified name.              |
| /characters               | POST       | Creates a new character with the given data.              |
| /characters/:id           | PUT        | Updates the character with the specified ID.              |
| /characters/:id           | DELETE     | Deletes the character with the specified ID.              |
| /characters/alignment/:a  | GET        | Returns all characters with the specified alignment.      |
| /characters/publisher/:p  | GET        | Returns all characters from the specified publisher.      |

## Authentication:

The API uses JSON Web Tokens (JWT) to handle user authentication. The following routes are available:


| Route                | HTTP Method | Description                                                                   |
|----------------------|-------------|-------------------------------------------------------------------------------|
| /api/users/signup    | POST        | Creates a new user with a username, email, and password.                      |
| /api/users/signin    | POST        | Authenticates a user with an email and password.                               |
| /api/users/verify    | GET         | Verifies a user's JWT and returns their user information.                      |
| /api/users/:username | GET         | Returns a user with the specified username.                                    |
| /api/users/allusernames | GET     | Returns an array of all usernames.                                            |
| /api/users/deleteall | DELETE      | Deletes all users from the database.                                          |
| /api/users/:username | DELETE      | Deletes a user with the specified username.                                   |
I hope this helps!

To authenticate a request, include an Authorization header with the value Bearer [TOKEN], where [TOKEN] is the token provided after a successful sign-in request.

## Models
* The Character model is defined in models/Character.js, using Mongoose.

## Controllers
* The API logic is defined in the controllers/characters.js file, using the Express.js Router.

## Dependencies
* express
* mongoose
* cors
* nodemon
* chalk
* node fetch
* railway 
* morgan 

Contributing contributions are welcome! 

Please submit a pull request with your changes.
