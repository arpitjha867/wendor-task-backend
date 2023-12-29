const express = require('express')
const { getAll, getOne, addTodo, updateTodo, deleteTodo } = require('../Controllers/todoControllers');

const router = express.Router();

router.get('/todos', getAll);

router.get('/todo/:id', getOne);

router.post('/todo', addTodo);

router.put('/todo/:id', updateTodo);

router.delete('/todo/:id', deleteTodo);

module.exports =  router;