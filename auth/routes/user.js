const router = require("express").Router();
const verifyToken = require("../middleware/index");

router.get("/", verifyToken, (req, res) => {
  //   res.json({ message: "Hello, World!" });
  res.json({ message: "User fetched successfully", user: req.user });
});

module.exports = router;
