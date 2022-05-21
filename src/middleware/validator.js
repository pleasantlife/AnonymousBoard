import Joi from 'joi';

export default {
  async defineType(req, res, next) {
    const queryValidator = Joi.object({
      limit: Joi.number().min(1),
      page: Joi.number(),
      type: Joi.string().valid('title', 'author'),
    });
    queryValidator.validate(req.query);
    next();
  },
};
