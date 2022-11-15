const categoryController = require("../controllers/category");

const router = require("express").Router();

router.post("/category/add", categoryController.addCategory);
router.get("/category/list", categoryController.getAllCategory);
router.put("/category/update/:id", categoryController.updateCategory);
router.delete("/category/delete/:id", categoryController.deleteCategory);
module.exports = router;
