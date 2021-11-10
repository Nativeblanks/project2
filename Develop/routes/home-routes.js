const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/viewall', (req, res) => {
  res.render('employees')
})

module.exports = router;