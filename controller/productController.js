var productModel = require("../model/Product.js");

class productController {
  static createDoc = async (req, res) => {
    try {
      const product =  await productModel(req.body);
      product.save();
      res.send({ result: product });
    } catch {
      res.status(404).send({ error: "Product Not found" });
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const product = await productModel.find();
      res.send({ result: product });
    } catch {
      res.status(404).send({ error: "Product Not found" });
    }
  };

  static getDocById = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      res.send(product);
    } catch {
      res.status(404).send({ error: "Product Not found" });
    }
  };

  static updateDoc = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      Object.assign(product, req.body);
      product.save();
      res.send({ result: product });
    } catch {
      res.status(404).send({ error: "Product Not found" });
    }
  };

  static deleteDoc = async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      product.remove();
      res.send({ result: "true" });
    } catch {
      res.status(404).send({ error: "Product Not found" });
    }
  };
}

module.exports = productController;
