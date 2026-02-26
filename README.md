# Dependencies
| Name | Description |
|------|-------------|
| [Express](https://expressjs.com/) | Web framework to build our backend server  |
| [Sequelize](https://sequelize.org/docs/v6/) | A Node.JS ORM tool compatible with our Postgres database. Requires Node v10+ |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) | Create tokens to authorize user access |
| [pg](https://node-postgres.com/) | Node.JS modules for interfacing with PostgreSQL | 
| [pg-hstore](https://github.com/scarney81/pg-hstore) | Converts json into h-store format. Required for Sequelize |
| [dotenv](https://github.com/motdotla/dotenv#readme) | Loading environment files from the host server's .env files |

## Middlewares
| Name | Description |
|------|-------------|
| [Cors](https://github.com/expressjs/cors#readme) | Tells browsers the origins of the request/responses |
| [Helmet](https://helmetjs.github.io/) | Secures express apps by setting HTTP headers |
| [Express-Rate-Limit](https://github.com/express-rate-limit/express-rate-limit) | Limit the number of repeated requests to the API |