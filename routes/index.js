const router = require("express").Router();
const pagesRouter = require("./pages");
/* GET home page. */

router.use(pagesRouter);

module.exports = router;
