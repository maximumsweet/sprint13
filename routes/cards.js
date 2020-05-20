const cardsRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

const cardsPath = path.join('data', 'cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile(cardsPath, { encoding: 'utf8' })
    .then((data) => {
      res.send(JSON.parse(data));
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({ message: 'Запрашиваемый файл не найден' });
    });
});

module.exports = cardsRouter;
