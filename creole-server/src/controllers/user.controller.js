const UserModel = require("../models/user.model");
class UserCtrl {
  static createUser(req, res) {
    const user = req.body;
    UserModel.create(user)
      .then((result) => {
        res.status(201).send({
          message: "User Created Successfully",
          data: result,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Could not create user", error: err });
      });
  } //createUser
}
module.exports = UserCtrl;
