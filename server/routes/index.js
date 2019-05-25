const express = require('express');
const router = express.Router();

const phones = require("../bin/phones.json")

router.get('/phones', function(req, res, next) {
  res.status(200).json(phones)
});

router.get('/:id', function(req, res, next) {
  res.status(200).json(phones[req.params.id])
});

module.exports = router;
