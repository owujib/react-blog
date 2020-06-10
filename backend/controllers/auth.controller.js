const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//create a jwt sign token for us
const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

//send a token on every response
createResponseToken = (user, statusCode) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  console.log({ token, user });
  res.status(statusCode).json({ token, user });
};

exports.signup = async (req, res, next) => {
  //cheeck if user exists already
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('email already exist');

  //create new user
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password,
  // });
  // console.log(user);
  try {
    const savedUser = await User.create(req.body);

    createResponseToken(savedUser, 201);
    next();
  } catch (err) {
    res.status(400).send(err);
    next();
  }
};

exports.login = async (req, res) => {
  //check if email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('email or password is wrong ');
  //check for correct password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('invalid passowrd');

  //create and asign a token
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  // res.header('auth-token', token).send(token);

  res.send('logged in 👌👌👌');
};
