const express = require('express');
const { createArtist, getArtists, getArtistByID } = require('../controllers/artist');

const router = express.Router();

router.post('/', createArtist);
router.get('/', getArtists);
router.get('/:id', getArtistByID);

module.exports = { router };

