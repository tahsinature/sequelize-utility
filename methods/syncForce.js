const { debugDB } = require("../util/debug");

module.exports = connection => {
  if (!connection) throw new Error("No connection has been given.");
  return new Promise((res, rej) => {
    connection
      .sync({ force: true })
      .then(() => {
        debugDB(connection.config.database + " synced forcefully...");
        res();
      })
      .catch(err => {
        rej(err);
      });
  });
};
