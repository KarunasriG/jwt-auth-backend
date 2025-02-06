const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/db.connect");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 3000;

connectDB();
dotenv.config();
app.use(express.json());

// Routes
app.use("/api/user", authRouter);
app.use("/api/posts", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
