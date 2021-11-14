const router   = require("express").Router();
//const { json } = require("sequelize/types");
const { Address, Employee } = require("../../models");

router.get("/", (req, res) => {
  Address.findAll({
    attributes: [
      'address_id',
      'Organization', 
      'Addressline1',
      'Addressline2',
      'City',
      'State',
      'Zip',
      'Phone',
      'Fax'
    ]
  })
    .then((dbData) => {
      const add = dbData.map(address => address.get({ plain : true }));
      res.render('addresses', { add });
    })
    .catch((err) => { console.log(err); })
});

router.get("/create", (req, res) => {
  res.render('add-address');
});

router.get("/:id", (req, res) => {
  Address.findAll({
    where: { Address_id: req.params.id }, 
    attributes: [
      'address_id', 
      'Organization', 
      'Addressline1',
      'Addressline2',
      'City',
      'State',
      'Zip',
      'Phone',
      'Fax'
    ]
  })
  .then((dbData) => {
    const add = dbData.map(address => address.get({ plain : true }));
    res.render('edit-address', { add });
  })
  .catch((err) => { console.log(err); })
});

router.post('/edit', (req, res) => {
  console.log('/edit');
  
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
    { where: { Address_id: req.body.address_id } 
  })
    .then((dbData) => { res.json(dbData); })
    .catch((err) => { console.log(err); });
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