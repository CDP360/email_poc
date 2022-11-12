const express = require("express");
const router = express.Router();
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const userController = require("./controllers/userController");
const messageController = require("./controllers/messageController");
const controller = require("./controllers/RecentController");
const isAuth = require("./middlewares/isAuth");
 
router.get("/", (req, res) => {
  res.send("Server is running");
});

router.use("/auth", authController);
router.use("/products", productController);
router.use("/user", userController);
router.use("/messages", messageController);
router.post("/recently/add", controller.recent);
router.get("/recently/list", controller.recentlist);
router.use("/email", messageController);

module.exports = router; 
