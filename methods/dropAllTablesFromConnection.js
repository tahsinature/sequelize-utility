const { debugDB } = require("../util/debug");

module.exports = connection => {
  if (!connection) throw new Error("No connection has been passed.");
  return new Promise((res, rej) => {
    connection
      .drop()
      .then(() => {
        debugDB(
          `All created tables has been removed from database: ${
            connection.config.database
          }...`
        );
        res();
      })
      .catch(err => {
        rej(err);
      });
  });
};
