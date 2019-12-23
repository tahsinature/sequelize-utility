module.exports = connections => {
  return new Promise((res, rej) => {
    let syncedConnection = 0;
    connections.forEach(connection =>
      connection
        .sync()
        .then(() => {
          syncedConnection = syncedConnection + 1;
          if (syncedConnection === connections.length) {
            logger("All DB synced...");
            res();
          }
        })
        .catch(err => {
          rej(err);
        })
    );
  });
};
