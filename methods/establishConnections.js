const { debugDB } = require("../util/debug");

module.exports = connectionsArray => {
  return new Promise(function(resolve, reject) {
    let activeConnection = 0;
    connectionsArray.forEach(connection => {
      connection
        .authenticate()
        .then(() => {
          debugDB("Connected to Database: " + connection.config.database);
          activeConnection = activeConnection + 1;
          if (activeConnection === connectionsArray.length) {
            debugDB("Successfully connected to all DBs.");
            resolve();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
