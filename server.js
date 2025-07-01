const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;


const corsOptions = {
  origin: `http://localhost:${port}` 
};
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

async function getRandomImage() {
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    return returnedData.urls.regular;
  } catch (error) {
    console.error('Unsplash API error:', error);
    return null;
  }
}

app.use("/api/v1/getRandomImage", async (req, res) => {
  const url = await getRandomImage();
  res.status(200).json({
    status: 200,
    data: url,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
