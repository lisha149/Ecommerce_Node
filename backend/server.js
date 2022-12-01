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
//using json-server to access and modify resources,
// app.get("/api/products", (req, res) => {
//   fs.readFile(__dirname + "/" + "products.json", "utf8", (err, products) => {
//     if (err) {
//       res.status(404).json({ message: err });
//     }
//     // console.log(products);
//     res.status(200).send(products);
//   });
// });

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost:${PORT}`)
);
