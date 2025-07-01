async function getRandomImage() {
  const endpoint = "http://localhost:8080/api/v1/getRandomImage";
  try {
    const response = await fetch(endpoint);
    const returnedData = await response.json();
    const receivedPhotoUrl = returnedData.data;

    const imgDiv = document.querySelector(".background-img");
    imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
  } catch (error) {
    console.error("Frontend fetch error:", error);
  }
}

getRandomImage();
