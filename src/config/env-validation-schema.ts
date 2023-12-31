import * as Joi from 'joi';

export default Joi.object({
  APP_PORT: Joi.number().required(),
  OUTER_PORT: Joi.number().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_DATABASE: Joi.string().required(),
  DB_URI: Joi.string().required(),
});
