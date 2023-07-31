const express = require('express');
const { createArtist, getArtists, getArtistByID, putArtist, deleteArtistByID } = require('../controllers/artist');
const { createAlbum } = require('../controllers/album');

const router = express.Router();

router.post('/', createArtist);
router.get('/', getArtists);
router.get('/:id', getArtistByID);
router.put('/:id', putArtist);
router.delete('/:id', deleteArtistByID);
router.post('/:artistId/albums', createAlbum);


module.exports = { router };

