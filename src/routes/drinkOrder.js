const drinkOrderController = require("../controllers/drinkOrder");

const router = require("express").Router();

router.post("/drink_order/add", drinkOrderController.addDrinkOrder);
router.get("/drink_order/list", drinkOrderController.getAllDrinkOrder);
router.put("/drink_order/update/:id", drinkOrderController.updateDrinkOrder);
router.delete("/drink_order/delete/:id", drinkOrderController.deleteDrinkOrder);

module.exports = router;
