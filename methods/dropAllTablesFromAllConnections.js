module.exports = connections => {
  return new Promise((res, rej) => {
    let droppedConnection = 0;
    connections.forEach(connection => {
      connection
        .drop()
        .then(() => {
          droppedConnection = droppedConnection + 1;
          logger(`All created tables removed from Database: ${connection.config.database}`);
          if (droppedConnection === connections.length) {
            logger(`All created tables has been removed from All Databases (${connections.length})...`);
            res();
          }
        })
        .catch(err => {
          rej(err);
        });
    });
  });
};
