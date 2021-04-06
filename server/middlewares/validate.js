const Joi = require("joi");

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email(),
    firstName: Joi.string().min(1).required(),
    lastName: Joi.string().min(1).required(),
  });

  if (schema.validate(req.body)) {
    next();
  } else {
    res.status(400).end();
  }
};

module.exports = { validateUser };
