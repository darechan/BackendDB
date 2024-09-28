const Transaction = require("../models/transaction.model");

const getTransactions = async (req, res) => {
  try {
    const product = await Transaction.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTransactions,
};
