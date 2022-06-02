const { User } = require("../models");

exports.home = (req, res) => {
  User.findAll().then((users) => {
    res.render("index", { title: "home", users });
  });
};

exports.show = (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) => {
    res.render("detail", { title: "detail", user });
  });
};

exports.store = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    placeofbirth: req.body.placeofbirth,
    dateofbirth: req.body.dateofbirth,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(422).json(" can't create user");
    });
};

exports.create = (req, res) => {
  res.render("create", { title: "create" });
};

exports.showEdit = (req, res) => {
  User.findOne({ where: { id: req.params.id } }).then((user) => {
    res.render("edit", { title: "edit", user });
  });
};

exports.update = (req, res) => {
  User.update(
    {
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      address: req.body.address,
      placeofbirth: req.body.placeofbirth,
      dateofbirth: req.body.dateofbirth,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    res.redirect("/");
  });
};

exports.destroy = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("back");
  });
};
