const express = require('express')
const router = express.Router()
const TaskModel = require('../models/Task');

router.get('/', async (req, res) => {
    try {
      const tasks = await TaskModel.find();
      res.json(tasks) 
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error'})
    }
  })
  
router.post('/', async(req, res) => {
    const { task } = req.body
    try {
      const newTask = new TaskModel({ content: task })
      await newTask.save()
      res.json({ success: true })
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error'})
    }
})

module.exports = router;