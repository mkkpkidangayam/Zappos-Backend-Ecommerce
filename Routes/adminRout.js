const express = require("express");
const router = express();
const adminAuth = require("../Middleware/adminAuth");
const adminControl = require("../controls/adminControls");
const upload = require("../Upload/multer");
const createProduct = require("../controls/productAdding");

router.post("/admin/login", adminControl.adminLogin);

router.get("/admin/users-list", adminAuth, adminControl.usersList);
router.delete(
  "/admin/user/delete/:userId",
  adminAuth,
  adminControl.deleteUserAccount
);
router.patch("/user/block/:userId", adminAuth, adminControl.blockUser);
router.patch("/user/unblock/:userId", adminAuth, adminControl.unblockUser);

// router.post("/admin/addproduct", adminAuth, upload.array("images", 6), adminControl.addProduct);
router.post("/admin/addproduct", adminAuth, adminControl.addProduct);
router.get("/admin/products-list", adminAuth, adminControl.productList);
router.get("/admin/product/:id", adminAuth, adminControl.getProductsById);
router.get("/admin/product/edit/:id", adminAuth, adminControl.editproduct);

// router.post("/admin/addproduct", createProduct);

router.post("/admin/topbar-content/create", adminControl.topbarContentCreating);
router.get("/admin/get-contents", adminControl.getAllContents);

router.post("/admin/create-coupon", adminControl.createCoupon);
router.get("/admin/get-coupons", adminAuth, adminControl.getAllCoupons);
router.delete("/admin/delete-coupon/:couponId", adminAuth, adminControl.deleteCoupon);
router.patch("/admin/coupon-block/:couponId", adminAuth, adminControl.blockCoupon);
router.patch("/admin/coupon-unblock/:couponId", adminAuth, adminControl.unblockCoupon);


module.exports = router;
