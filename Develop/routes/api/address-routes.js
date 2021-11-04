const router = require("express").Router();
const { Address, Employee } = require("../../models");


router.get("/", (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Address.findAll({})
      .then((dbData) => res.json(dbData))
      .catch((err) => {
        console.log(err);
      });
  });

  router.get("/:id", (req, res) => {
    Address.findOne({
      where: { Address_id: req.params.id },

    })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "NO DATA FOUND" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => {
        console.log(err);
      });
  });



  module.exports = router;