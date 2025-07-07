const numDice = document.getElementById("numDice");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

function rollDice() {
  const count = parseInt(numDice.value);
  const results = [];
  diceImages.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    results.push(value);

    const img = document.createElement("img");
    img.src = "assets/images/dice-" + value + ".png";  // ✅ correct path
    img.alt = `Dice ${value}`;
    img.style.width = "60px";
    img.style.margin = "5px";

    img.onerror = () => {
      console.error("Image not found:", img.src);
    };

    diceImages.appendChild(img);
  }

  diceResult.textContent = `You rolled: ${results.join(", ")}`;
  
  diceResult.classList.add("result-background");
}
