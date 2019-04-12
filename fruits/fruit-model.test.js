const db = require('../data/dbConfig');
const fruitModel = require('./fruit-model');

describe('Fruits Model', () => {
  beforeEach(async () => {
    await db('fruits').truncate();
  });

  describe('Insert a Fruit to the DB and return the new Fruit', async () => {
    it('Should insert fruits and return the new row', async () => {
      const banana = await fruitModel.addFruit({
        color: 'yellow',
        name: 'Banana'
      });
      const orange = await fruitModel.addFruit({
        color: 'orange',
        name: 'Orange'
      });

      const fruitList = await fruitModel.getAllFruits();

      expect(banana).toHaveProperty('color', 'yellow');
      expect(banana).toHaveProperty('id');
      expect(banana).toHaveProperty('name', 'Banana');
      
      expect(orange).toHaveProperty('color', 'orange');
      expect(orange).toHaveProperty('id');
      expect(orange).toHaveProperty('name', 'Orange');

      expect(fruitList).toHaveLength(2);
    });
  });
});
