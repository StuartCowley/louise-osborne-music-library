const createArtist = (req,res) => {
    res.status(201).send({message: "Artist created"});
};

module.exports = createArtist;