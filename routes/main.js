const express = require('express');
const StudentModel = require('../models/student');
const router = express.Router();
const mongoose = require('mongoose');
const { studentValidations } = require('../validations/student');

router.post('/', async (req, res) => {
  const { error } = studentValidations(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //console.log(req.body.student_name);

  let student = new StudentModel({
    student_name: req.body.student_name,
  });
  try {
    const newStudent = await student.save();
    res.status(200).send(newStudent);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/', async (req, res) => {
  try {
    let students = await StudentModel.find();
    res.status(200).send(students);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
