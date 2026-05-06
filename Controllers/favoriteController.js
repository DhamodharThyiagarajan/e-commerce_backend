const Favorite = require('../Models/Favorite');
//hen user add any product to “Favourites”, do post request store it in the db.
exports.addToFavorites = async (req, res) => {
  try {
    const favItem = new Favorite(req.body);
    await favItem.save();
    res.status(201).json({ message: "Product added to favorites" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add to favorites" });
  }
};
//When user click on favourites Icon, get all the products added in the favourites
exports.getFavorites = async (req, res) => {
  try {
    const favItems = await Favorite.find().populate('productId');
    res.json(favItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};
