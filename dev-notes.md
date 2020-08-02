# Developer notes

## File structure:

- .env
- .gitignore
- dev-notes.md
- LICENSE
- package.json
- Procfile
- README.md
- ΥΠΟΧΡΕΩΤΙΚΗ_ΕΡΓΑΣΙΑ_2020.pdf


## Build and run app locally:

```bash
npm install
heroku local web
```

## NodeJS on Heroku

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

### Shell commands

Log into the Heroku PostgreSQL instance:
```shell
heroku pg:psql postgresql-transparent-00915 --app breezebnb
```

Create your table and entries on Heroku Postgres:
```Shell
cat migrations/init.sql | heroku pg:psql postgresql-solid-93707 --app breezebnb
```

Test and deploy:
```shell
heroku local web
```

Log in to root user:
```shell
sudo -u postgres psql
```

Log in to postgres superuser:
```shell
psql postgres
```

Log in to breezebnb_admin:
```shell
psql -d postgres -U breezebnb_admin
```

Display information regarding current connection to postgres:
```shell
\conninfo
```


Connect to database:
```
\c database
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

Show table data:
```shell
TABLE tablename;
```