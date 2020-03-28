const { celebrate, Segments, Joi } = require('celebrate');

class IncidentValidator {
  validIndex() {
    return celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      })
    })
  }

  validStore() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown(),
      [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
      })
    })
  }

  validDelete() {
    return celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
      })
    })
  }
}

module.exports = new IncidentValidator();