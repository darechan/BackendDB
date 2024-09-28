const express = require("express")
const mongoose = require("mongoose")
const Transaction = require("./models/transaction.model.js")
// const productRoute = require("../simple-crud-app/routes/product.route.js");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.use("/api/transaction", productRoute);
app.get("/", (req, res) => {
  res.send("Meow meow")
})

app.post("/api/transaction", async (req, res) => {
  try {
    const product = await Transaction.create(req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// get all transactions
app.get("/api/transaction", async (req, res) => {
  try {
    const product = await Transaction.find({})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// get a particular transaction
app.get("/api/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params
    const product = await Transaction.findById(id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Update API

app.put("/api/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params

    const product = await Transaction.findByIdAndUpdate(id, req.body)

    if (!product) {
      return res.status(404).json({ message: "product not found" })
    }
    const updatedProduct = await Transaction.findById(id)
    res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// delete product

app.delete("/api/transaction/:id", async (req, res) => {
  try {
    const { id } = req.params

    const product = await Transaction.findByIdAndDelete(id)

    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    res.status(200).json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

mongoose
  .connect(
    "mongodb+srv://admin:admin123@backenddb.pe8lc.mongodb.net/GirlHacks?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("connected")
    app.listen(3000, () => {
      console.log("Hemlo hemlo on 3000")
    })
  })
  .catch(() => {
    console.log("failed")
  })
