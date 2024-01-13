import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import { app } from "./app.js";
import connectDb from "./db/index.js";

const PORT = 8000;
connectDb()
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log("MONGO DB connection FAILED", error);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
