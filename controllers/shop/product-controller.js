const Product = require("../../models/Product");

const getFiltteredProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { getFiltteredProducts };
