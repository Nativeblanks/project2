const router = require("express").Router();
const { Employee, Address } = require("../../models");

router.get("/", (req, res) => {
  Employee.findAll({
    attributes: [
      'Firstname',
      'Lastname',
      'Title'
    ]
  })
  .then(dbPostData => {

    const emps = dbPostData.map(employee => employee.get({ plain: true }));
      console.log(emps[0])
    res.render('employees', {
        emps});
  })
    .catch((err) => {
      console.log(err);
    })
});

router.get("/:id", (req, res) => {
  Employee.findOne({
    where: { employee_id: req.params.id },
    attributes: ["Firstname", "Lastname", "Title"],
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
  Employee.create({
    Firstname: req.body.Firstname,
    Lastname: req.body.Lastname,
    Title: req.body.Title,
    Phone: req.body.Phone,
    Cell: req.body.Cell,
    Email: req.body.Email,
    Hiredate: req.body.Hiredate,
    Dateofbirth: req.body.Dateofbirth,
    Linkedin: req.body.Linkedin,
    Facebookaccount: req.body.Facebookaccount,
    Twitteraccount: req.body.Twitteraccount,
    Address_id: req.body.Address_id,
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  Employee.update(
    {
      Firstname: req.body.Firstname,
      Lastname: req.body.Lastname,
      Title: req.body.Title,
      Phone: req.body.Phone,
      Cell: req.body.Cell,
      Email: req.body.Email,
      Hiredate: req.body.Hiredate,
      Dateofbirth: req.body.Dateofbirth,
      Linkedin: req.body.Linkedin,
      Facebookaccount: req.body.Facebookaccount,
      Twitteraccount: req.body.Twitteraccount,
      Address_id: req.body.Address_id,
    },
    { where: { employee_id: req.params.id } }
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
  Employee.destroy({
    where: { employee_id: req.params.id },
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
