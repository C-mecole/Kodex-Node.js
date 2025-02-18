const products = [
  {
    id: 1,
    name: "tv",
  },
  {
    id: 2,
    name: "fan",
  },
];

module.exports.getProducts = (req, res) => {
  res.json({ data: products });
};

module.exports.addProduct = (req, res) => {
  const data = req.body;
  products.push(data);
  res.status(200).json({ data: products });
};
