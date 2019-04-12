const fruitModel = require('./fruit-model');
const router = require('express').Router();

function handleServerError(res, error) {
  console.error(error);
  return res
    .status(500)
    .json({ message: 'The request could not be completed.', error: error });
}

router.get('/time', (req, res) => {
  res.status(200).json({ message: 'Fruit Time!' });
});

router.get('/', (req, res) => {
  fruitModel
    .getAllFruits()
    .then(fruitList => res.status(200).json(fruitList))
    .catch(error => handleServerError(res, error));
});

router.post('/', (req, res) => {
  if (!req.body.color || !req.body.name) {
    return res
      .status(400)
      .json({ message: 'Please include `color` and `name` properties.' });
  }
  fruitModel
    .addFruit(req.body)
    .then(newFruit => res.status(201).json(newFruit))
    .catch(error => handleServerError(res, error));
});

module.exports = router;
