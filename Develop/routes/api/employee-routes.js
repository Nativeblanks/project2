const router = require("express").Router();
const { Employee, Address } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Employee.findAll({})
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Employee.findOne({
    where: { employee_id: req.params.id },
    include: [
      {
        model: employee,
        attributes: ["Firstname", "Lastname", "Title"],
      },
    ],
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

/* router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.params.category_name,
  })
    .then((dbData) => res.json(dbData))
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    { category_name: req.params.category_name },
    { where: { id: req.params.id } }
  )
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "NO DATA FOUND" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: { id: req.params.id },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "NO DATA FOUND" });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch((err) => {
      console.log(err);
    });
});
*/
module.exports = router;
