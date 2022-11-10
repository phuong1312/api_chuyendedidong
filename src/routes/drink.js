const drinkController = require("../controller/drink");

const router = require("express").Router();

//add user
router.post("/drink/add", drinkController.addDrink);
router.get("/drink/list", drinkController.getAllDrink);
router.get("/drink/:id", drinkController.getDrinkById);
router.put("/drink/update/:id", drinkController.updateDrink);
router.delete("/drink/delete/:id", drinkController.deleteDrink);

module.exports = router;
