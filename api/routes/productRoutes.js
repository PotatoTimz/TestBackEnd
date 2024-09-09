const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.route("/").get(getAllProducts).post(postProduct);
router.route("/:id").get(getProduct).put(putProduct).delete(deleteProduct);

module.exports = router;
