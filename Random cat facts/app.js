const btn = document.getElementById("fetchBtn");
const paragraph = document.getElementById("paragraph");
const image = document.getElementById("image");

// Fetch random cat fact and image
async function generateCatContent() {
  try {
    // 1. Fetch Cat Fact
    const factRes = await axios.get("https://catfact.ninja/fact");
    paragraph.innerText = factRes.data.fact;

    // 2. Fetch Random Cat Image
    const imgRes = await axios.get("https://api.thecatapi.com/v1/images/search");
    image.src = imgRes.data[0].url;

  } catch (err) {
    paragraph.innerText = "Oops! Couldn't fetch data. Try again. 😿";
    image.src = "catt.jpeg"; // fallback image
  }
}

// On button click
btn.addEventListener("click", generateCatContent);

// Optional: Generate on first load
generateCatContent();
