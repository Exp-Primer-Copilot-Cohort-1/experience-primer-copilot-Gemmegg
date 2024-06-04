// Create web server
const express = require('express');
const app = express();
app.use(express.json());

// Create a simple array to store comments
const comments = [];

// Create a new comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.send('Comment added!');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});