const Joi = require('joi');

const studentValidations = data => {
  const studentSchema = Joi.object({
    student_name: Joi.string().required().messages({
      'string.base': `Student name should be a type of 'text'`,
      'string.empty': `Student name can't be empty!`,
    }),
  });

  return studentSchema.validate(data);
};

module.exports.studentValidations = studentValidations;
