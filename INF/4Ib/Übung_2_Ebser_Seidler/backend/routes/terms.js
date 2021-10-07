const { getAllTerms, getAllCategories } = require("../controller");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// router.get("/all", function (req, res, next) {
//   try {
//     const result = getAllTerms();
//     console.log(result);
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// });

module.exports = router;
