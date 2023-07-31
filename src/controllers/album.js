const db = require('../db/index.js');

const createAlbum = async (req, res) => {
    const { artistId } = req.params;
    const { name, year } = req.body;

    try {
        const {
            rows: [album],
        } = await db.query(
            'INSERT INTO Albums (name, year, artistId) VALUES ($1, $2, $3) RETURNING *',
            [name, year, artistId]
        );
        res.status(201).json(album);
        } catch (err) {
            res.status(500).json(err.message);
        }
};

module.exports = { createAlbum };