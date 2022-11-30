const express = require("express");
const app = express();
app.use(express.json());

//endpoint to validate sever setup
app.get("/", (req, res) => {
  res.send("API is working....");
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port :http://localhost:${PORT}`)
);
