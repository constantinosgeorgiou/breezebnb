
[![Status][badge-project-status]][url-milestones]
[![GitHub milestones][badge-milestones]][url-milestones]
[![GitHub milestone][badge-milestone-1]][url-milestone-1]
[![License][badge-license]][url-license]

<p align="center">
  <a href="https://github.com/constantinosgeorgiou/breezebnb">
    <img src="client/src/assets/images/brand/logo_square.png" alt="Logo" height="80">
  </a>

  <h1 align="center">Breezebnb</h1>

  <p align="center">
    Project inspired by [airbnb](https://www.airbnb.com/ "airbnb website"). Made as part of coursework of my Web Application Technologies course at my university :mortar_board:
    <br />
    <a href="https://github.com/constantinosgeorgiou/breezebnb/wiki"> :book: <strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://breezebnb.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/constantinosgeorgiou/breezebnb/issues">Report Bug</a>
    ·
    <a href="https://github.com/constantinosgeorgiou/breezebnb/issues">Request Feature</a>
  </p>
</p>

## Table of contents <!-- omit in toc -->
- [About the project](#about-the-project)
- [Technologies](#technologies)
  - [Server](#server)
  - [Client](#client)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
  - [Server](#server-1)
  - [Client](#client-1)
  - [Database](#database)
- [Start everything up](#start-everything-up)
- [Features](#features)
- [Status](#status)
- [Inspiration](#inspiration)
- [Created by](#created-by)
- [License](#license)

## About the project

[![BreezeBnB Homepage][image-breezebnb]](https://breezebnb.herokuapp.com/)

This was a project we made during our Web Application Technologies course at my university. As you might have guessed from the name it's similar to [airbnb](https://www.airbnb.com/ "airbnb website"). That means that it has the following features:

- Search for listings as a guest or anonymous user
- Create a guest account, in order to book listings
- View and book listings as a guest
- Apply to become a host
- Post / edit / delete your listings as a host
- Edit / delete your account

## Technologies

### Server
- Node.js - version 10.x
- PostgreSQL - version 12.4
- Express - version 4.17.1
- JWT
### Client
- React - version 16.13.1

## Prerequisites

You need to have pre-installed `Node.js`, `npm` and `PostgreSQL`.

Download links

- [Node.js](https://nodejs.org/ "Node.js Home page")
- [PostgreSQL](https://www.postgresql.org/download/ "PostgreSQL Download page")

> Node.js package manager or [npm](https://www.npmjs.com/ "Node.js package managers' Home page") is installed as part of node


## Setup

> If you don't want to set up a local enviroment of the propject, you can simply view it [live](http://breezebnb.herokuapp.com "BreezeBnB's Home page").

To set up a local enviroment simply clone the [repository](https://github.com/constantinosgeorgiou/breezebnb "BreezeBnB's GitHub repository")

```bash
# To clone the repository

git clone https://github.com/constantinosgeorgiou/breezebnb.git
```
### Server

Install the dependencies of the server
```bash
# To install the dependencies of the server

cd server/ && npm install
```

Create enviroment variables file or .env
```bash
touch server/.env
```

Define enviroment variables of the server
```bash
# Your server/.env file should look similar to this:

PORT = 5000

DATABASE_URI = "postgres://<database_user>:<database_user password>@localhost:5432/<database>"

JWT_SECRET = "< 256 bit random string >"

```

> You need to replace everyting inside **<** and **>** with your own values

### Client

Install the dependencies of the client
```bash
# To install the dependencies of the client

cd client/ && npm install
```

Create enviroment variables file or .env
```bash
touch client/.env
```

Define enviroment variables of the client
```bash
# Your client/.env file should look similar to this:

```

> You need to replace everyting inside **<** and **>** with your own values

### Database
This is probably where you're gonna have some difficulty setting up a local enviroment of the project.

#### **Install PostgresQL**  <!-- omit in toc -->

For the database section of the web app we need to create a dedicated *database* and a dedicated *database user*.

Luckily things don't have to be difficult.
The following article helped me create a new database as well as a new database user, responsible for the database

[How to install and use PostgresQL](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

Also, while we were setting up the database user we got the following error, of which there's a link to the fix we applied.
> Fix for error: ["psql: FATAL: Peer authentication failed for user"](https://gist.github.com/AtulKsol/4470d377b448e56468baef85af7fd614)


#### **Configure database**  <!-- omit in toc -->

Once you have created the new database and its' user we need to configure it.

Connect to postgres as root and enter the root password (of postgres not your machines')
```bash
# To connect to postgres as root

psql -U postgres
```

Connect to the new database
```postgres
-- To connect to the new database

\c <database name>
```

Create UUID extension for the new database
```postgres
-- To create the UUID extension

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```
> We do not concern our selves with the creation of UUIDs from the server with an npm package like [uuid](https://www.npmjs.com/package/uuid "uuid npm package page"). We let postgres handle the UUIDs for us.

There are two ENUM types avaiable within the database.
 - PROPERTY_TYPE: Defines the property type of each listing
 - USER_ROLE: Defines the role of the user within the application

Create the ENUM types
```postgres
-- To create the USER_ROLE enum type

CREATE TYPE USER_ROLE AS ENUM
(
    'admin',
    'guest',
    'host',
);

-- To create the PROPERTY_TYPE enum type

CREATE TYPE PROPERTY_TYPE AS ENUM
(
    'House',
    'Apartment',
    'Bed and Breakfast',
    'Hostel',
    'Hotel',
    'Villa'
);
```
After that is done, we need to create the tables of our database.
```bash
# To create all the tables that the application needs simply run

cat server/database/create-all-tables.sql | psql -d <database_of_application> -U <user_of_database>
```

> You need to replace everyting inside **<** and **>** with your own values

And finally the set up is done!
[insert gif here]

> If you don't want to set up a local enviroment of the propject, you can simply view it [live](http://breezebnb.herokuapp.com "BreezeBnB's Home page").

## Start everything up
Now that the set up is all done, let's run the application.

To start the server
```bash
# To start the server

cd server
npm start
```

To start the client
```bash
# To start the client

cd client
npm start
```
Low and behold a tab on your browser should open with the client running.

## Features

List of features

- Search for listings as a guest or anonymous user
- Create a guest account, in order to book listings
- View and book listings as a guest
- Apply to become a host
- Post / edit / delete your listings as a host
- Edit / delete your account


See the [open issues](https://github.com/constantinosgeorgiou/breezebnb/issues) for a list of future features (and known issues).


## Status
Project is: _in progress_.

We are working on a complete re-work of the front end, for both functional and aesthetic reasons. We are replacing bootstrap with [Material-UI](https://material-ui.com/) and re-doing the way we used the [React Context API](https://reactjs.org/docs/context.html), as well as they way we handled user data.

There's an open [milestone][url-milestone-1] to view the progress of said re-work.

## Inspiration
Project inspired by [airbnb]([airbnb.com/](https://www.airbnb.com/) "airbnb website")


## Created by

- [constantinosgeorgiou](https://www.constantinosgeorgiou.com/ "Constantinos' personal website") - feel free to contact me!
- [leonidasefrem](https://github.com/leonidasefrem)

## License

[MIT License](https://mit-license.org/)

<!-- MARKDOWN IMAGES -->
[image-breezebnb]: https://breezebnb.herokuapp.com/static/media/index.06d48066.jpg

<!-- MARKDOWN BADGES -->
[badge-license]: http://img.shields.io/:license-mit-blue.svg?style=flat-square

[badge-project-status]: https://img.shields.io/badge/status-under%20development-orange?style=flat-square

[badge-milestones]: https://img.shields.io/github/milestones/open/constantinosgeorgiou/breezebnb?style=flat-square

[badge-milestone-1]: https://img.shields.io/github/milestones/progress-percent/constantinosgeorgiou/breezebnb/1?style=flat-square

<!-- MARKDOWN LINKS -->
[url-milestones]: https://github.com/constantinosgeorgiou/breezebnb/milestones

[url-milestone-1]: https://github.com/constantinosgeorgiou/breezebnb/milestone/1

[url-license]: http://badges.mit-license.org
