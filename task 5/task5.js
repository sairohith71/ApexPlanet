// Page switching
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active-page');
  });
  document.getElementById(pageId).classList.add('active-page');
}

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Product list
  const products = [
    {
      name: "HONOR X9c",
      price: "₹20,748",
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/41RFlnJDCVL._SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      name: "Lenovo IdeaPad Pro 5 Intel Core",
      price: "₹99,990",
      rating: 4.5,
      image: "https://m.media-amazon.com/images/I/61VoVLP6-PL._SX679_.jpg"
    },
    {
      name: "USPA Shoes",
      price: "₹2,335",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/71YGS9i9q0L._SY695_.jpg"
    },
    {
      name: "Slim Fit Stretch Poplin Shirt",
      price: "₹15,300",
      rating: 3.9,
      image: "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1492984_lifestyle?$rl_4x5_zoom$"
    },
    {
      name: "ZEBRONICS Duke",
      price: "₹1,500",
      rating: 4.2,
      image: "https://m.media-amazon.com/images/I/61CTGoZ5woL._SX679_.jpg"
    },
    {
      name: "Urbano Fashion Men",
      price: "₹1,200",
      rating: 3.7,
      image: "https://m.media-amazon.com/images/I/61cxmVOEihL._SX679_.jpg"
    },
    {
      name: "Boldfit Water Bottles ",
      price: "₹999",
      rating: 4.0,
      image: "https://m.media-amazon.com/images/I/61l4HcOeu2L._SX679_.jpg"
    },
    {
      name: "TRAWOC TRAILMASTER",
      price: "₹2,995",
      rating: 4.4,
      image: "https://m.media-amazon.com/images/I/81Su5N9j74L._SX679_.jpg"
    },
  ];

  const productList = document.getElementById("product-list");
  if (productList) {
    products.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <h3>${p.name}</h3>
        <p>Price: ${p.price}</p>
        <p>Rating: ${p.rating} ⭐</p>
        <button class="buy-now-btn" data-index="${index}">Buy Now</button>
        <button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>
      `;
      productList.appendChild(card);
    });

    // Add event listeners for the buttons
    document.querySelectorAll(".buy-now-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const i = e.target.dataset.index;
        alert(🛒 You chose to BUY NOW: ${products[i].name});
        // Redirect or further processing logic can go here
      });
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
      btn.addEventListener("click", e => {
        const i = e.target.dataset.index;
        alert(🛍 ${products[i].name} added to cart.);
        // Add to cart logic can go here
      });
    });
  }

  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("📨 Thanks for getting in touch! We'll be with you as soon as possible.");
      form.reset();
    });
  }
});