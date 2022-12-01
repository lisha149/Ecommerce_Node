const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

// endpoint to validate sever setup
app.get("/", (req, res) => {
  res.send("API is working....");
});

//endpoint to get all the products
app.get("/api/products", (req, res) => {
  fs.readFile(__dirname + "/" + "products.json", "utf8", (err, products) => {
    if (err) {
      res.status(404).json({ message: err });
    }
    // console.log(products);
    res.status(200).send(products);
  });
});

//endpoint to add the products
app.post("/api/products/create", (req, res) => {
  const data = fs.readFileSync(__dirname + "/" + "products.json", "utf8");
  let products = JSON.parse(data);
  // console.log(products);
  const newProduct = req.body;
  products.push(newProduct);
  res.json(products);
  fs.writeFile(
    __dirname + "/" + "products.json",
    JSON.stringify(products, null, 2),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Products Added Successfully");
      }
    }
  );
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost:${PORT}`)
);
