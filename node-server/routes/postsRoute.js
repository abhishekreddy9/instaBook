const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController");

router.get("/all", postsController.getAllPosts);
router.post("/add", postsController.addPost);
router.get("/delete", postsController.deletePost);

module.exports = router;
