const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/photo', async (req, res) => {
  const key = process.env.UNSPLASH_ACCESS_KEY;
  const endpoint = `https://api.unsplash.com/photos/random?client_id=${key}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    res.json({ url: data.urls.regular });
  } catch (error) {
    console.error("Unsplash fetch error:", error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
