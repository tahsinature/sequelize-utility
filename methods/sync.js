module.exports = connection => {
  if (!connection) throw new Error("No connection has been given.");
  return new Promise((res, rej) => {
    connection
      .sync()
      .then(() => {
        logger(connection.config.database + " synced...");
        res();
      })
      .catch(err => {
        rej(err);
      });
  });
};
