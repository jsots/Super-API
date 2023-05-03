# character API

*This is a RESTful API that provides data on characters, using Node.js, Express.js, and MongoDB*

## Setup:
* Install Node.js and MongoDB.
* Clone the repository and navigate to the project directory.
* Run npm install to install the required dependencies.
* Start the MongoDB server.
* Seed the database with character data by running the seed.js script with npm run seed.

Usage
* To start the server, run npm start or npm run dev

| Route                 | HTTP Method | Description                                                     |
|-----------------------|-------------|-----------------------------------------------------------------|
| /                     | GET         | Returns a list of all characters                               |
| /:id                  | GET         | Returns a character with the specified ID                       |
| /name/:name           | GET         | Returns a character with the specified name                     |
| /                     | POST        | Creates a new character                                          |
| /:id                  | PUT         | Updates a character with the specified ID                       |
| /:id                  | DELETE      | Deletes a character with the specified ID                       |
| /alliance/:alliance   | GET         | Returns a list of characteres with the specified alliance       |
| /alliance/good        | GET         | Returns a list of characteres with the "good" alignment          |
| /alliance/bad         | GET         | Returns a list of characteres with the "bad" alignment           |
| /alliance/neutral     | GET         | Returns a list of characteres with the "neutral" alignment       |
| /publisher/:publisher | GET         | Returns a list of characteres with the specified publisher      |
| /publisher/Marvel     | GET         | Returns a list of characteres with the publisher "Marvel Comics" |
| /publisher/DC         | GET         | Returns a list of characteres with the publisher "DC Comics"     |

## Authentification Routes:
| Route                   | HTTP Method | Description                                                     |
|-------------------------|-------------|-----------------------------------------------------------------|
| /api/characters         | GET         | Returns a list of all characters                                 |
| /api/characters/:id     | GET         | Returns a character with the specified ID                       |
| /api/characters/name/:name | GET      | Returns a character with the specified name                     |
| /api/characters         | POST        | Creates a new character                                          |
| /api/characters/:id     | PUT         | Updates a character with the specified ID                       |
| /api/characters/:id     | DELETE      | Deletes a character with the specified ID                       |
| /api/characters/alliance/:alliance | GET | Returns a list of characters with the specified alliance      |
| /api/characters/alliance/good  | GET | Returns a list of characters with the "good" alignment          |
| /api/characters/alliance/bad   | GET | Returns a list of characters with the "bad" alignment           |
| /api/characters/alliance/neutral | GET | Returns a list of characters with the "neutral" alignment       |
| /api/characters/publisher/:publisher | GET | Returns a list of characters with the specified publisher    |
| /api/characters/publisher/Marvel | GET | Returns a list of characters with the publisher "Marvel Comics" |
| /api/characters/publisher/DC | GET | Returns a list of characters with the publisher "DC Comics"     |



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

Contributing contributions are welcome! 

Please submit a pull request with your changes.
