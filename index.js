const datejs = require(`datejs`);

function combineUsers(...args) {
  const combinedObjects = {users: []};

  for (const arg of args) {
    combinedObjects.users = [...combinedObjects.users, ...arg];
  }

  combinedObjects.merge_date = new Date().toISOString();

  return combinedObjects;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};