const areaController = require("../controllers/area");

const router = require("express").Router();
router.post("/area/add", areaController.addArea);
router.get("/area/list", areaController.getAllArea);
router.delete("/area/delete/:id", areaController.deleteArea);

module.exports = router;
