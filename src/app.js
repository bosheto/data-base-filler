const random_name = require("node-random-name");
const axios = require("axios");

function GetRandomProduct() {
  rand_name = random_name();
  rand_price = getRandomPrice(199).toFixed(2);
  rand_old_price = (rand_price * 1.3).toFixed(2);
  rand_discount = Math.random() >= 0.5 ? true : false;
  rand_rating = getRandomInt(11);
  rand_category = Math.random() >= 0.5 ? "bags" : "shoes";

  return (product = {
    name: rand_name,
    img: "N/A",
    img_alt: "Product image",
    description:
      "Introducing the epitome of timeless sophistication and functionality: the Leather Luxe Bag. This meticulously crafted leather bag is a symbol of elegance, boasting a seamless fusion of classic design and contemporary style. It exudes an aura of refinement and is sure to turn heads wherever it goes.",
    price: rand_price,
    price_old: rand_old_price,
    discounted: rand_discount,
    rating: rand_rating,
    category: rand_category,
  });
}

const headers = {
  "Content-Type": "application/json", // Set the content type to JSON
  // Add any other headers you need, such as authorization headers
};

function getRandomPrice(max) {
  return Math.random() * max;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createEntityInDb(entity) {
  axios
    .post(
      "https://c4-nexus-backend.onrender.com/api/products/",
      entity,
      headers
    )
    .then()
    .catch((error) => console.error(error));
}

for(i = 0; i < 200; i++){
    createEntityInDb(GetRandomProduct())
}