const { getAllTerms, getAllCategories } = require("../controller");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/all", async function (req, res, next) {
  try {
    const result = await getAllTerms();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
