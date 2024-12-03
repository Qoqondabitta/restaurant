import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import routerProduct from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT  = process.env.PORT || 5000

app.use(express.json());

app.use("/api/products", routerProduct);

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

// Pueou9651SPKDyF1
