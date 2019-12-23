module.exports = (table, db) => {
  return new Promise(async (res, rej) => {
    if (!table) return rej(new Error("No table provided."));
    if (!db) return rej(new Error("Please provide a definite sequelize instance."));

    let tables = [];
    if (!Array.isArray(table)) tables.push(table);
    else tables = table;
    const models = db.modelManager.all;
    const isAllFromProvidedDB = tables.every(t => models.includes(t));
    if (!isAllFromProvidedDB) return rej(new Error("Please provide all models from same db."));

    for (const m of models) {
      if (!tables.includes(m)) {
        await m.sync({ force: true });
        loggeer(`[Restored]-> ${m.name}`);
      } else loggeer(`[Skipped]-> ${m.name}`);
    }
    res();
  });
};
