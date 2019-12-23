module.exports = connections => {
  return new Promise(async (res, rej) => {
    for (const con of connections) {
      await con.close();
    }
    logger(`Total DB connection closed: ${connections.length}`);
  });
};
