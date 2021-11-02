const getProductsController = async(req, res, next) => {
  res.status(200).json({ message: "lista de produtos" })
}

module.exports = {
  getProductsController,
}