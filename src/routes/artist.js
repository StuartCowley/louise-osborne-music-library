const express = require('express');
const { createArtist, getArtists, getArtistByID, putArtist } = require('../controllers/artist');

const router = express.Router();

router.post('/', createArtist);
router.get('/', getArtists);
router.get('/:id', getArtistByID);
router.put('/:id', putArtist);

module.exports = { router };

