module.exports = connections => {
  return new Promise((res, rej) => {
    let syncedConnection = 0;
    connections.forEach(connection =>
      connection
        .sync({ force: true })
        .then(() => {
          syncedConnection = syncedConnection + 1;
          if (syncedConnection === connections.length) {
            logger("All DB synced forcefully...");
            res();
          }
        })
        .catch(err => {
          rej(err);
        })
    );
  });
};
