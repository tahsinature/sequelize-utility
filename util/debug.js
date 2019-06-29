const debug = require("debug");
debug.enable("server:*");

const namespaces = {
  debugError: debug("server:error"),
  debugDB: debug("server:db")
};

const allDebugKeys = Object.keys(namespaces);

allDebugKeys.forEach((singleDebugKey, index) => {
  debug.colors.unshift(index);
  namespaces[singleDebugKey].color = index;
});

module.exports = namespaces;
