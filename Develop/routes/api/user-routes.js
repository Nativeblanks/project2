const router = require('express').Router();
const { User } = require('../../models');

router.post('/', (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.email = dbUserData.email
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  console.log(req.body)
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUserData => {
    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
if(req.body.password === dbUserData.password){
  req.session.save(() => {
    req.session.loggedIn = true;

    res.json({dbUserData, message: 'You are now logged in!' });
  });
}
else{
  res.sendStatus(401);
}    
  });
});

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
  });
  router.get("/", (req, res) => {
    User.findAll({})
      .then((dbData) => res.json(dbData))
      .catch((err) => {
        console.log(err);
      });
  });

  module.exports = router;