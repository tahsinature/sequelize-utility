const debug = require("debug");
debug.enable("app:*");

const namespaces = {
  debugError: debug("app:error"),
  debugDB: debug("app:db")
};

const allDebugKeys = Object.keys(namespaces);

allDebugKeys.forEach((singleDebugKey, index) => {
  debug.colors.unshift(index);
  namespaces[singleDebugKey].color = index;
});

module.exports = namespaces;
