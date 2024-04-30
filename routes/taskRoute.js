const express = require('express')
const router = express.Router()
const TaskModel = require('../models/Task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
      const tasks = await TaskModel.find();
      res.json(tasks) 
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error'})
    }
  })
  
// Create a new task
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

// Update a task
router.put('/:id', async (req, res) => {
  const taskId = req.params.id;
  const { task } = req.body;

  try { 
    const updatedTask = await TaskModel.findByIdAndUpdate( taskId, {content: task}, {new: true} )
    if(!updatedTask) {
      return res.status(400).json({ error: 'Task not found' })
    }
    res.json({ success: true, task: updatedTask })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error'})
  }
})

module.exports = router;