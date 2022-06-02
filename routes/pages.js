const router = require("express").Router();
const page = require("../controllers/pagesControllers");

router.get("/", page.home);
router.get("/detail/:id", page.show);
router.get("/user", page.create);
router.post("/user", page.store);
router.get("/edit/:id", page.showEdit);
router.put("/edit/:id", page.update);

router.delete("/user/:id", page.destroy);

module.exports = router;
