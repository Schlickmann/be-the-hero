const { celebrate, Segments, Joi } = require('celebrate');

class SessionValidator {
  validStore() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
      })
    })
  }
}

module.exports = new SessionValidator();