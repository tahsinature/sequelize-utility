const { debugDB } = require("../util/debug");

module.exports = (table, ins) => {
  return new Promise((res, rej) => {
    table
      .sync({ force: true })
      .then(() => {
        debugDB(table.name + " has been restored...");
        res();
      })
      .catch(err => {
        rej(err);
      });
  });
};
