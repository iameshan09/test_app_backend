const { object } = require('joi');
const Joi = require('joi');

const postValidations = data => {
  const PostSchema = Joi.object({
    post_title: Joi.string().required().messages({
      'string.base': `Title should be a type of 'text'`,
      'string.empty': `Title can't be empty!`,
      'any.required': `Title can't be empty!`,
    }),
    post_desc: Joi.string().required().messages({
      'string.base': `Description should be a type of 'text'`,
      'string.empty': `Description can't be empty!`,
      'any.required': `Description can't be empty!`,
    }),
    title_color: Joi.string().required().messages({
      'string.empty': `Please select a title color`,
      'any.required': `Please select a title color`,
    }),
  });

  return PostSchema.validate(data);
};

const updatePostValidations = data => {
  const commentSchema = Joi.object({
    comment: Joi.string().required().messages({
      'string.empty': `Comment cannot be empty`,
      'any.required': `Comment cannot be empty`,
    }),
  });

  return commentSchema.validate(data);
};

module.exports.postValidations = postValidations;
module.exports.updatePostValidations = updatePostValidations;
