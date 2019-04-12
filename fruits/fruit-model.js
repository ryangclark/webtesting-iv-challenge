const db = require('../data/dbConfig');

module.exports = {
  addFruit,
  deleteFruit,
  getAllFruits,
  getFruitBy,
  updateFruit
};

function addFruit(fruit) {
  return db('fruits')
    .insert(fruit)
    .then(newFruit => getFruitBy({ id: newFruit[0] }).first())
    .catch(error => console.error(error));
}

function getFruitBy(filter) {
  return db('fruits')
    .select()
    .where(filter);
}

function getAllFruits() {
  return db('fruits');
}

function updateFruit(id, changes) {
  return db('fruits')
    .where({ id })
    .update(changes)
    .then(res => {
      if (res) {
        return getFruitBy({ id }).first();
      }
    })
    .catch(error => console.error(error));
}

function deleteFruit(id) {
  return db('fruits')
    .where({ id })
    .delete();
}
