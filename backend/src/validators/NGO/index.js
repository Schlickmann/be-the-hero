const { celebrate, Segments, Joi } = require('celebrate');

class NGOValidator {
  validStore() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10),
        city: Joi.string().required(),
        state: Joi.string().required().length(2),
        country: Joi.string().required(),
      })
    })
  }
}

module.exports = new NGOValidator();