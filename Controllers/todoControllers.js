const db = require('../configureDB')

const getAll = async (req,res) => {
  db.all('SELECT * FROM todos', (err, rows) => {
    if (err) {
      res.status(500).json({ success:false, error: err.message });
      return;
    }
    res.status(200).json({success:true, data : rows});
  });

}

const getOne = async (req,res) => {
    const id = req.params.id;
    db.get('SELECT * FROM todos WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(row);
    });
}

const addTodo = async (req,res) => {
    const { title, description } = req.body;
    db.run('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description], function (err) {
      if (err) {
        res.status(500).json({success:true, error: err.message });
        return;
      }
      res.status(200).json({ success:true, id: this.lastID });
    });
}

const updateTodo = async (req,res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    db.run('UPDATE todos SET title = ?, description = ? WHERE id = ?', [title, description, id], (err) => {
      if (err) {
        res.status(500).json({success : false , error: err.message });
        return;
      }
      res.status(200).json({success : true ,  message: 'Todo updated successfully' });
    });
}

const deleteTodo = async (req,res) => {
    const id = req.params.id;
    db.run('DELETE FROM todos WHERE id = ?', [id], (err) => {
      if (err) {
        res.status(500).json({success:false, error: err.message });
        return;
      }
      res.status(200).json({success:true, message: 'Todo deleted successfully' });
    });
}

module.exports = {getAll, getOne, addTodo, updateTodo, deleteTodo}