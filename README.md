# Superhero API

*This is a RESTful API that provides data on superheroes, using Node.js, Express.js, and MongoDB*

## Setup:
* Install Node.js and MongoDB.
* Clone the repository and navigate to the project directory.
* Run npm install to install the required dependencies.
* Start the MongoDB server.
* Seed the database with superhero data by running the seed.js script with npm run seed.

Usage
* To start the server, run npm start or npm run dev

| Route                 | HTTP Method | Description                                                     |
|-----------------------|-------------|-----------------------------------------------------------------|
| /                     | GET         | Returns a list of all superheroes                               |
| /:id                  | GET         | Returns a superhero with the specified ID                       |
| /name/:name           | GET         | Returns a superhero with the specified name                     |
| /                     | POST        | Creates a new superhero                                          |
| /:id                  | PUT         | Updates a superhero with the specified ID                       |
| /:id                  | DELETE      | Deletes a superhero with the specified ID                       |
| /alliance/:alliance   | GET         | Returns a list of superheroes with the specified alliance       |
| /alliance/good        | GET         | Returns a list of superheroes with the "good" alignment          |
| /alliance/bad         | GET         | Returns a list of superheroes with the "bad" alignment           |
| /alliance/neutral     | GET         | Returns a list of superheroes with the "neutral" alignment       |
| /publisher/:publisher | GET         | Returns a list of superheroes with the specified publisher      |
| /publisher/Marvel     | GET         | Returns a list of superheroes with the publisher "Marvel Comics" |
| /publisher/DC         | GET         | Returns a list of superheroes with the publisher "DC Comics"     |


## Models
* The Superhero model is defined in models/Superhero.js, using Mongoose.

## Controllers
* The API logic is defined in the controllers/superheroes.js file, using the Express.js Router.

## Dependencies
* express
* mongoose
* cors
* Contributing
* Contributions are welcome! 

Please submit a pull request with your changes.
