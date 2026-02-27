# Digiscan: API
Digiscan is a search engine for the Digimon 2020 Trading Card Game. Built with Node.JS, Express, Sequelize and PostgreSQL, this API is used to handle the CRUD requests to our PostgreSQL database.

# Repositories
| Project | Link |
|---------|------|
| Backend | https://github.com/macfluffy/digiscan-db.git |
| Frontend | https://github.com/macfluffy/digiscan-ui.git |

# Documentation
You can access the API documentation on your local device, by booting up Swagger: 
http://localhost:4000/docs

# Dependencies
| Name | Description |
|------|-------------|
| [dotenv](https://github.com/motdotla/dotenv#readme) | Loading environment files from the host server's .env files |
| [Express](https://expressjs.com/) | Web framework to build our backend server  |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) | Create tokens to authorize user access |
| [pg](https://node-postgres.com/) | Node.JS modules for interfacing with PostgreSQL | 
| [pg-hstore](https://github.com/scarney81/pg-hstore) | Converts json into h-store format. Required for Sequelize |
| [Sequelize](https://sequelize.org/docs/v6/) | A Node.JS ORM tool compatible with our Postgres database. Requires Node v10+ |
| [swagger](https://swagger.io/) | Automate API documentation |

## Middlewares
| Name | Description |
|------|-------------|
| [Cors](https://github.com/expressjs/cors#readme) | Tells browsers the origins of the request/responses |
| [Express-Rate-Limit](https://github.com/express-rate-limit/express-rate-limit) | Limit the number of repeated requests to the API |
| [Helmet](https://helmetjs.github.io/) | Secures express apps by setting HTTP headers |