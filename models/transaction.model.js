const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },
    received: {
      type: Number,
      required: true,
    },
    paid: {
      type: Number,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
