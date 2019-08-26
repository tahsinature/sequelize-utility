const { debugDB } = require("../util/debug");

module.exports = connections => {
  return new Promise(async (res, rej) => {
    for (const con of connections) {
      await con.close();
    }
    debugDB(`Total DB connection closed: ${connections.length}`);
  });
};
