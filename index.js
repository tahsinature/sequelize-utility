class SequelizeHelper {
  constructor(objectOfInstances, Sequelize) {
    const arrayOfSequelizeInstances = Object.values(objectOfInstances); // Array of sequelize instance
    arrayOfSequelizeInstances.forEach(instance => {
      if (!(instance instanceof Sequelize)) {
        throw new Error("Provided non-sequelize instance.");
      }
    });
    this.connections = arrayOfSequelizeInstances;
  }

  establishConnections() {
    return require("./methods/establishConnections")(this.connections);
  }
  resetTable(table) {
    return require("./methods/resetTable")(table, this);
  }
  sync(connection) {
    return require("./methods/sync")(
      (connection =
        this.connections.length === 1 ? this.connections[0] : connection)
    );
  }
  syncForce(connection) {
    return require("./methods/syncForce")(
      (connection =
        this.connections.length === 1 ? this.connections[0] : connection)
    );
  }
  syncAllForce() {
    return require("./methods/syncAllForce")(this.connections);
  }
  dropAllTablesFromConnection(connection) {
    return require("./methods/dropAllTablesFromConnection")(connection);
  }
  dropAllTablesFromAllConnections() {
    return require("./methods/dropAllTablesFromAllConnections")(
      this.connections
    );
  }
}

module.exports.SequelizeHelper = SequelizeHelper;
