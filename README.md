# sequelize-utility

[![npm version](https://badgen.net/npm/v/sequelize-utility)](https://www.npmjs.com/package/sequelize-utility)
[![npm downloads](https://badgen.net/npm/dm/sequelize-utility)](https://www.npmjs.com/package/sequelize-utility)
[![Last commit](https://badgen.net/github/last-commit/tahsinature/sequelize-utility)](https://github.com/tahsinature/sequelize-utility)
[![GitHub stars](https://badgen.net/github/stars/tahsinature/sequelize-utility)](https://github.com/tahsinature/sequelize-utility)
[![node](https://badgen.net/npm/node/sequelize-utility)](https://www.npmjs.com/package/sequelize-utility)
[![License](https://badgen.net/github/license/tahsinature/sequelize-utility)](https://github.com/tahsinature/sequelize-utility/)

New to Sequelize? Take a look at the [Tutorials and Guides](http://docs.sequelizejs.com/).

Sequelize-utility is a simple helper of Sequelize library, to efficiently interact with databases instance from Sequelize. Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. With sequelize-utility you can do operations like below in a promisified way with just simple calls:

- Establish db connection
- Establish multiple connections
- Reset a table
- Sync DB
- Sync DB (For All Active Connections)
- Sync Force DB
- Sync Force DB (For All Active Connections)
- Drop all created tables from Sequelize
- Drop all created tables from Sequelize (For All Active Connections)

<!-- ## v5 Release -->

## Installation

```bash
$ npm install --save sequelize-utility
```

## Usage

### Step 1 - Intialize databases and do named export

```js
// database.js
const { Sequelize } = require("sequelize");
module.exports.db1 = new Sequelize({
  host: "host1",
  username: "username1",
  password: "password1",
  database: "database1",
  dialect: "dialect1"
});

module.exports.db2 = new Sequelize({
  host: "host2",
  username: "username2",
  password: "password2",
  database: "database2",
  dialect: "dialect2"
});
```

### Step 2 - Import databases and plug it with sequelize-utility

```js
// models/index.js
const { Sequelize } = require("sequelize");
const { SequelizeHelper } = require("sequelize-utility");
const dbs = require("path to database.js");
const dbHelper = new SequelizeHelper(dbs, Sequelize);
```

### Step 3 - Then you can import the helper & execute methods like these...

```js
// app.js
const dbHelper = require("path to helper file");

dbHelper.establishConnections();
dbHelper.syncAllForce();
dbHelper.syncAll();
dbHelper.sync();
dbHelper.syncForce();
dbHelper.resetTable();
```
