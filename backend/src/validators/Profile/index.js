const { celebrate, Segments, Joi } = require('celebrate');

class ProfileValidator {
  validIndex() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  }
}

module.exports = new ProfileValidator();