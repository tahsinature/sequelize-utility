class SequelizeHelper {
  /**
   *
   * @param {*} objectOfInstances
   * @param {*} Sequelize
   * @param {Object} options
   * @param {Fuction} options.logger default console.log
   */
  constructor(objectOfInstances, Sequelize, options = {}) {
    const arrayOfSequelizeInstances = Object.values(objectOfInstances); // Array of sequelize instance
    arrayOfSequelizeInstances.forEach(instance => {
      if (!(instance instanceof Sequelize)) {
        throw new Error("Provided non-sequelize instance.");
      }
    });
    global.logger = () => {};
    if (options.logger) global.logger = options.logger;
    this.connections = arrayOfSequelizeInstances;
  }

  establishConnections() {
    return require("./methods/establishConnections")(this.connections);
  }
  resetTable(table) {
    return require("./methods/resetTable")(table, this);
  }
  resetTablesExcepts(table, db) {
    return require("./methods/resetTablesExcepts")(table, (db = this.connections.length === 1 ? this.connections[0] : db));
  }
  sync(connection) {
    return require("./methods/sync")((connection = this.connections.length === 1 ? this.connections[0] : connection));
  }
  syncForce(connection) {
    return require("./methods/syncForce")((connection = this.connections.length === 1 ? this.connections[0] : connection));
  }
  syncAllForce() {
    return require("./methods/syncAllForce")(this.connections);
  }
  dropAllTablesFromConnection(connection) {
    return require("./methods/dropAllTablesFromConnection")(connection);
  }
  dropAllTablesFromAllConnections() {
    return require("./methods/dropAllTablesFromAllConnections")(this.connections);
  }
  closeAllConnections() {
    return require("./methods/closeAllConnections")(this.connections);
  }
}

module.exports.SequelizeHelper = SequelizeHelper;
