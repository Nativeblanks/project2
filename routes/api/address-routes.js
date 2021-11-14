const router = require("express").Router();
const { Address, Employee } = require("../../models");

router.get("/", (req, res) => {
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
router.post("/", (req, res) => {
  Address.create({
    Organization: req.body.Organization,
    Addressline1: req.body.Addressline1,
    Addressline2: req.body.Addressline2,
    City: req.body.City,
    State: req.body.State,
    Zip: req.body.Zip,
    Phone: req.body.Phone,
    Fax: req.body.Fax,
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Address.update(
    {
      Organization: req.body.Organization,
      Addressline1: req.body.Addressline1,
      Addressline2: req.body.Addressline2,
      City: req.body.City,
      State: req.body.State,
      Zip: req.body.Zip,
      Phone: req.body.Phone,
      Fax: req.body.Fax,
    },
    { where: { Address_id: req.params.id } }
  )
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

router.delete("/:id", (req, res) => {
  Address.destroy({
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
