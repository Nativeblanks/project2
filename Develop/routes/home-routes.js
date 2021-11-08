const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router

module.exports = router;