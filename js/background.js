const images = [];

for (let i = 0; i <= 5; i++) {
  images.push(`${i}.jpg`);
}

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = `url(img/${chosenImage})`;
document.body.style.backgroundImage = bgImage;
