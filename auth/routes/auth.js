const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validations/index");

// Register

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //   Validate the data before we make a user
  const error = registerValidation(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    //   Check if the user is already in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    //   Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //  Create a new user
    const user = new User({ name, email, password: hashedPassword });
    const savedUser = await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
});

// Login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //   Validate the data before we login the user
  const error = loginValidation(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    //   Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    //   Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    //   Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "User logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
});

module.exports = router;
