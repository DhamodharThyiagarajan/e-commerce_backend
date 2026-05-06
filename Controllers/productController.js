const Product = require('../Models/Product');
//Get all the products from API and display in UI. 
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
// Get the products category wise, when user click on any category
exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category products" });
  }
};

// Add a new product
exports.addProduct = async (req, res) => {
  try {
    const { id, title, price, description, category, image, rating } = req.body;
    
    // Validate required fields
    if (!id || !title || !price || !description || !category || !image || !rating) {
      return res.status(400).json({ error: "id, title, price, description, category, image, and rating are required" });
    }

    const newProduct = new Product({
      id,
      title,
      price,
      description,
      category,
      image,
      rating
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: savedProduct });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product", details: err.message });
  }
};

