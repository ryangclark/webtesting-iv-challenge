const request = require('supertest');
const server = require('../server');

describe('Fruit Routes', async () => {
  describe('GET /api/fruits/time', () => {
    it('Should return `Fruit Time!`', () => {
      return request(server)
        .get('/api/fruits/time')
        .then(response => {
          expect(response).toHaveProperty('status', 200);
          expect(response).toHaveProperty('type', 'application/json');
          expect(response).toHaveProperty('body', { message: 'Fruit Time!' });
        })
        .catch(error => console.error(error));
    });
  });

  describe('POST /api/fruits', () => {
    it('Should return the newly added Fruit', () => {
      return request(server)
        .post('/api/fruits')
        .send({ color: 'green', name: 'Granny Smith Apple' })
        .then(response => {
          expect(response).toHaveProperty('status', 201);
          expect(response).toHaveProperty('type', 'application/json');
          expect(response.body).toHaveProperty('color', 'green');
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('name', 'Granny Smith Apple');
        });
    });
  });
});
