const datejs = require(`datejs`);

function combineUsers(...args) {
  const combinedObjects = {users: []};

  for (const arg of args) {
    combinedObjects.users = [...combinedObjects.users, ...arg];
  }

  return combinedObjects;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};