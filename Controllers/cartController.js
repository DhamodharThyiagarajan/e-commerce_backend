const Cart = require('../Models/Cart');

//When user click on “Add to Cart”, do post request store it in the db. 
exports.addToCart = async (req, res) => {
  try {
    const cartItem = new Cart(req.body);
    await cartItem.save();
    res.status(201).json({ message: "Product added to cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
};
//When user click on Cart Icon, get all the products added in the cart
exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('productId');
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};   

