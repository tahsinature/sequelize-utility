module.exports = (table, ins) => {
  return new Promise((res, rej) => {
    table
      .sync({ force: true })
      .then(() => {
        logger(table.name + " has been restored...");
        res();
      })
      .catch(err => {
        rej(err);
      });
  });
};
