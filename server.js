// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
