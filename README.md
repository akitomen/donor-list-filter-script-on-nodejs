# The Donor List Problem

Clone the repository

    git clone git@bitbucket.org:aleksandrs_kvasa/donor-list-test.git

>[About solving algorithm](OVERVIEW.md)

## Installation
1. Install NodeJS of version v16.3.0 or greater. See [Nodejs.org](https://nodejs.org/en/download/)
2. Install Postgresql if you haven't yet. See [postgresql.org](https://www.postgresql.org/)
3. Run following bash command in root of the project to install dependencies 
```bash
npm i
```
4. Rename file **.env.example** to **.env** and set your own **DATABASE_URL**. See [Connection URLs](https://www.prisma.io/docs/reference/database-reference/connection-urls) for more information
5. Run following bash command in root of the project to init database table
```bash
npx prisma db push
```

## How to execute
The execution is simple. Just run following bash command in root of the project
```bash
npm run start
```
Then check **ANS.json** file.

## About dependencies
* prisma.js — A powerfull NodeJs ORM for easy and fast work with database. See it's [official site](https://www.prisma.io/) for more information
* eslint — Most popular JavaScript linter. See it's [official site](https://eslint.org/) for more information

## donor_db database sql attached
For more convenient examination, I have added db dump in .sql format