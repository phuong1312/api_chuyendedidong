const orderController = require("../controllers/order");

const router = require("express").Router();

router.post("/order/add", orderController.addOrder);
router.get("/order/list", orderController.getAllOrder);

module.exports = router;
