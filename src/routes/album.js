const express = require('express');

const { getAlbums, getAlbumById } = require('../controllers/album');

const albumRouter = express.Router();

albumRouter.get('/', getAlbums);
albumRouter.get('/:id', getAlbumById);



// router.put('/:id', putArtist);
// router.delete('/:id', deleteArtistByID);
// router.post('/:artistId/albums', createAlbum);

module.exports = { albumRouter };