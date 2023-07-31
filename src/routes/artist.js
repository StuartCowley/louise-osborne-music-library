const express = require('express');
const { createArtist, getArtists } = require('../controllers/artist');

const router = express.Router();

router.post('/', createArtist);
router.get('/', getArtists);

module.exports = { router };

