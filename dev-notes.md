
# Developer notes

## File structure:

| Name | Description |
| --- | --- |
| .env | Used for enviroment variables |
| .gitignore | Specifies intentionally untracked files to ignore |
| LICENSE | License of the project |
| [README.md](README.md) | Future documentation of repository|
| README.pdf | University documentation |
| ΥΠΟΧΡΕΩΤΙΚΗ_ΕΡΓΑΣΙΑ_2020.pdf | Objective and specifications of project |
| [dev-notes.md](dev-notes.md) | Developer notes |
| Procfile | Heroku apps include a Procfile that specifies the commands that are executed by the app on startup. |
| package.json | Central repository of configuration for tools |
| package-lock.json | Stores an exact, versioned dependency tree |
| app.js | Starting point of application |
| controllers/ | Folder containing various controllers |
| database/ | Folder containing various database files |
| middleware/ | Folder containing the middleware used in the application |
| models/ | Folder containing schemas of database |
| routes/ | Folder containing the routes of the application |
| views/ | Folder containing the Front end part of the application | 


## Build and run server

[How to Deploy Multiple Apps Under a Single GitHub Repository to Heroku](https://medium.com/better-programming/how-to-deploy-multiple-apps-under-a-single-github-repository-to-heroku-f6177489d38)

```bash
git clone https://github.com/constantinosgeorgiou/breezebnb.git
cd breezebnb
npm init
node app.js

# NOTE: create .env file
touch .env
# Put enviroment variables in .env file
```

## Build and run app locally:

```bash
npm install
heroku local web
```

## Dependencies

| Name          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| Express       | Web application framework                                     |
| node-postgres | Used for interfacing with the PostgreSQL database             |
| dotenv        | Loads environment variables from a .env file into process.env |
| -             | -                                                             |
| -             | -                                                             |

**NOTE:** In the documentation hyperlink the name of each dependency to its corresponding website

## NodeJS on Heroku

[Best practices for REST API design](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/)

[Getting started with NodeJS](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

[Deploying NodeJS](https://devcenter.heroku.com/articles/deploying-nodejs)

[Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices#hook-things-up)

Prerequisites:
 - [ ] heroku --version
 - [ ] node --version
 - [ ] npm --version
 - [ ] git --version

### Preparing a Codebase for Heroku Deployment

[Guide](https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment)


## PostgresQL

[How to install and use PostgresQL](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

```shell
sudo apt-get install postgresql
```

[Installation & Setup](https://r00t4bl3.com/post/how-to-install-postgresql-12-on-linux-mint-19-tara-19-1-tessa-19-2-tina-19-3-tricia)

[Some postgres best practices](https://www.digitalocean.com/blog/some-postgres-best-practices/)

[How to setup a free PostgreSQL database on Heroku](https://dev.to/prisma/how-to-setup-a-free-postgresql-database-on-heroku-1dc1)

[**Setting up a RESTful API with Node.js and PostgreSQL**](https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/)

### Shell commands

Log into the Heroku PostgreSQL instance:
```shell
heroku pg:psql postgresql-transparent-00915 --app breezebnb
```

Create your table and entries on **Heroku** Postgres:
```bash
cat <sql file OR model> | heroku pg:psql postgresql-transparent-00915 --app breezebnb

# Example for heroku:
cat models/listings.sql | heroku pg:psql postgresql-transparent-00915 --app breezebnb

```

Create your table and entries on **local** Postgres:
```bash
cat <sql file OR model> | psql -d <database name> -U <user name>
# OR
cat database/config.sql | psql -d <database name> -U <user name>
cat models/* | psql -d <database name> -U <user name>


# Examples for local dabatase:

# For all models:
cat models/* | psql -d breezebnb -U breezebnb


# For single files:
cat model/users.sql    | psql -d breezebnb -U breezebnb
cat model/listings.sql | psql -d breezebnb -U breezebnb

```

Seed database:
```bash
# LOCAL -> Generate seed and seed database:
# --------------------------------------
node database/generate-seed.js > database/seed.sql && cat database/seed.sql | psql -d <database> -U <user>

# Example
node database/generate-seed.js > database/seed.sql && cat database/seed.sql | psql -d breezebnb -U breezebnb


# HEROKU -> Generate seed and seed database:
# --------------------------------------
node database/generate-seed.js > database/seed.sql && cat database/seed.sql | heroku pg:psql postgresql-transparent-00915 --app breezebnb


# Generate seed only
# ------------------
node database/generate-seed.js > database/seed.sql


# Seed database only
# ------------------
cat database/seed.sql | psql -d <database> -U <user>

```

Test and deploy:
```shell
heroku local web
```

Postgres service commands:

| Command                      | Action                                                                            |
| ---------------------------- | --------------------------------------------------------------------------------- |
| `service postgresql status`  | [Status check](https://r2schools.com/how-to-start-stop-postgresql-on-ubuntu/)     |
| `service postgresql start`   | [Start Postgres](https://r2schools.com/how-to-start-stop-postgresql-on-ubuntu/)   |
| `service postgresql stop`    | [Stop Postgres](https://r2schools.com/how-to-start-stop-postgresql-on-ubuntu/)    |
| `service postgresql restart` | [Restart Postgres](https://r2schools.com/how-to-start-stop-postgresql-on-ubuntu/) |


Log in to postgres superuser:
```shell
psql -U postgres
```
**FIX:** ["psql: FATAL: Peer authentication failed for user"](https://gist.github.com/AtulKsol/4470d377b448e56468baef85af7fd614)


Log in to breezebnb:
```shell
psql -d postgres -U breezebnb
```
**FIX:** "Peer authentication failed for user "breezebnb" **=>** in *pg_hba.conf* change `local all all peer` from `peer` to `md5`, then restart the service `service postgresql restart`

Display information regarding current connection to postgres:
```shell
\conninfo
```


Connect to database:
```
\c <database>
\c breezebnb
```

[List users](https://www.postgresqltutorial.com/postgresql-list-users/):
```shell
\du
```



[List databases](https://www.postgresqltutorial.com/postgresql-show-databases/):
```shell
\l
```



[Show tables](https://www.postgresqltutorial.com/postgresql-show-tables/):
```shell
\dt
```

[Show types](https://stackoverflow.com/questions/9535937/is-there-a-way-to-show-a-user-defined-postgresql-enumerated-type-definition)
```shell
\dT
```

[Show extensions](https://stackoverflow.com/questions/21799956/using-psql-how-do-i-list-extensions-installed-in-a-database)
```shell
\dx
```

Show table data:
```shell
TABLE tablename;
```

Rotate Heroku database credentials:
```bash
heroku pg:credentials:rotate <database-name> --app <app-name>
# Example
heroku pg:credentials:rotate postgresql-color-99999 --app breezebnb
```

Reset Heroku database:
```shell
heroku pg:reset --app breezebnb
```

Information for Heroku database:
```shell
heroku pg:info
``` 

###  PostgresQL GUI OmniDB
1. Download OmniDB for [linux](https://omnidb.org/en/downloads-en)
2. Setup
3. Connections->New Connection
4. Fill in data
5. Save Data
6. Press green tick button in Action field
7. Enter password
8. Explore path and find our database
PostgreSQL 12.3->Database->(database_name)->Schemas
(If password asked enter it again)
8. Now you can view and edit database tables 

### Postgres database design:

#### Tables:

- users

  - Phone numbers are stored as *VARCHAR* 

    [Falsehoods Programmers Believe About Phone Numbers](https://github.com/google/libphonenumber/blob/master/FALSEHOODS.md)
  
  - [what is the right data type for unique key in postgresql DB?](https://stackoverflow.com/questions/11778102/what-is-the-right-data-type-for-unique-key-in-postgresql-db)

## Javascript

[JavaScript Best Practices](https://www.w3schools.com/js/js_best_practices.asp)

[JavaScript Naming Convention Best Practices](https://medium.com/javascript-in-plain-english/javascript-naming-convention-best-practices-b2065694b7d)

[45 Useful JavaScript Tips, Tricks and Best Practices](https://modernweb.com/45-javascript-tips-tricks-practices/)

[Jake Archibald: In The Loop - JSConf.Asia](https://www.youtube.com/watch?v=cCOL7MC4Pl0) watch in order to understand the inner workings of JS

## React

[React Tutorial: An Overview and Walkthrough](https://www.taniarascia.com/getting-started-with-react/)

[Intro to React](https://reactjs.org/tutorial/tutorial.html)

[How to consume a RESTful API in React](https://pusher.com/tutorials/consume-restful-api-react)

### Modules Installation Commands

```shell
npm install @material-ui/lab

npm i --save react-bootstrap

npm install helmet --save

npm i -S bootstrap
npm i -S popper.js
npm i -S jquery

npm install axios --save
npm install cloudinary --save
```

## .env

Define the following enviroment variables for the application to run properly

```bash
# Port that server is listening
PORT = <port>

# Cors allows only requests from this url 
CORS_ORIGIN = "http://localhost:<port>/"

# Database credentials
DATABASE_URI = 'postgresql://<username>:<password>@<host>:<port>/<database>'

# JWT secret
JWT_SECRET = "<256 bit alphanumeric string>"

```
