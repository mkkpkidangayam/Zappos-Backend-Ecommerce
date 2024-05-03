const express = require("express");
const router = express();
const adminAuth = require("../Middleware/adminAuth");
const adminControl = require("../controls/adminControls");
const upload = require("../Upload/multer");
const createProduct = require('../controls/productAdding')

router.post("/admin/login",adminControl.adminLogin);

router.get("/admin/users-manage",adminAuth, adminControl.listingUsers);
router.delete("/admin/user/delete/:userId", adminAuth, adminControl.deleteUserAccount);
router.patch("/user/block/:userId", adminAuth, adminControl.blockUser)
router.patch("/user/unblock/:userId", adminAuth, adminControl.unblockUser)

// router.post("/admin/addproduct", adminAuth, upload.array("images", 6), adminControl.addProduct);
router.post("/admin/addproduct",adminAuth, adminControl.addProduct);
// router.post("/admin/addproduct", createProduct);


module.exports = router             