module.exports = connectionsArray => {
  return new Promise(function(resolve, reject) {
    let activeConnection = 0;
    connectionsArray.forEach(connection => {
      connection
        .authenticate()
        .then(() => {
          logger("Connected to Database: " + connection.config.database);
          activeConnection = activeConnection + 1;
          if (activeConnection === connectionsArray.length) {
            logger("Successfully connected to all DBs.");
            resolve();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  });
};
