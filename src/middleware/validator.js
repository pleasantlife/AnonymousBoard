import Joi from 'joi';
import inspector from 'schema-inspector';

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

  async sanitizeParam(req, res, next) {
    const sanitization = {
      type: 'object',
      properties: {
        id: { type: 'number' },
        postId: { type: 'number' },
        limit: { type: 'number', min: 1 },
        offset: { type: 'number', min: 1 },
        page: { type: 'number', min: 1 },
      },
    };
    req.query = inspector.sanitize(sanitization, req.query);
    req.params = inspector.sanitize(sanitization, req.params);
    next();
  },
};
