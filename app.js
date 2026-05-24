const form = document.getElementById("myForm");
const successMessage = document.getElementById("successMessage");
console.log(form);
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Show success message
  successMessage.style.display = "block";

  // Optional: Clear form fields
  form.reset();
});

// fetch api data
const apiData = [
  {
    planet: "Mercury",
    distanceFromSun: 57.9,
    image: "https://anurella.github.io/images/planets/mercury.webp",
  },
  {
    planet: "Venus",
    distanceFromSun: 108.2,
    image: "https://anurella.github.io/images/venus.webp",
  },
  {
    planet: "Earth",
    distanceFromSun: 149.6,
    image: "https://anurella.github.io/images/planets/earth.jpg",
  },
  {
    planet: "Mars",
    distanceFromSun: 227.9,
    image: "https://anurella.github.io/images/planets/mars.webp",
  },
  {
    planet: "Jupiter",
    distanceFromSun: 778.6,
    image: "https://anurella.github.io/images/planets/jupiter.webp",
  },
  {
    planet: "Saturn",
    distanceFromSun: 1433.5,
    image: "https://anurella.github.io/images/planets/saturn.webp",
  },
  {
    planet: "Uranus",
    distanceFromSun: 2872.5,
    image: "https://anurella.github.io/images/planets/uranus.webp",
  },
  {
    planet: "Neptune",
    distanceFromSun: 4495.1,
    image: "https://anurella.github.io/images/planets/neptune.webp",
  },
  {
    planet: "Pluto",
    distanceFromSun: 5906.4,
    image: "https://anurella.github.io/images/planets/pluto.webp",
  },
];
async function fetchPlanets() {
  const container = document.getElementById("planets");

  apiData.forEach((planet) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${planet.image}" alt="${planet.planet}">
            <h2>${planet.planet}</h2>
            <p>Distance: ${planet.distanceFromSun} million km</p>
        `;

    container.appendChild(card);
  });
}

fetchPlanets();
