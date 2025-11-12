// server.js
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

let visitCount = 0;

// Existing example route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// 👇 New visitor counter route
app.get('/api/visits', (req, res) => {
  visitCount++;
  res.json({ visits: visitCount });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

