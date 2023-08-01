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

const getAlbums = async (req, res) => {
    try {
      const { rows } = await db.query('SELECT * FROM Albums');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

const getAlbumById = async (req, res) => {
    const { id } = req.params;
    try {
        const {
            rows: [album],
        } = await db.query('SELECT * FROM Albums WHERE id = $1', [id]);

    if (!album) {
        return res.status(404).json({ message: `album ${id} does not exist` });
    }
    res.status(200).json(album);
    } catch (err) {
        res.status(500).json(err.message);
    }
};

module.exports = { createAlbum, getAlbums, getAlbumById };