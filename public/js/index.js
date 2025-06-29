const quotes = [
  { text: "There are no limits. There are only plateaus...", author: "Bruce Lee" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Success is not final, failure is not fatal...", author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

let current = 0;

function showQuote() {
  const quoteBox = document.getElementById('quote-box');
  const quote = quotes[current];

  quoteBox.innerHTML = `
    <h1>"${quote.text}"</h1>
    <p>- ${quote.author}</p>
  `;

  current = (current + 1) % quotes.length;
}


showQuote();
setInterval(showQuote, 5000);

const client_id = "your_real_key_here"; 

async function getRandomImage() {
  try {
    const response = await fetch('/api/photo');
    const data = await response.json();

    const imgDiv = document.querySelector('.background-img');
    imgDiv.style.backgroundImage = `url("${data.url}")`;
  } catch (error) {
    console.error("Client fetch error:", error);
  }
}

getRandomImage(); 
