// Blog data (normally you'd fetch this from a server or JSON file)
const products = [
  {
    id: "1",
    title: "Fece mask",
    price: "$10",
    image: "facemask.jpg",
    content: "This article explores the benefits of herbal products and their uses in modern health..."
  },
  {
    id: "2",
    title: "Thermometer",
    price: "$15",
    image: "facemask.jpg",
    content: "Capsules are evolving in the health industry. In this article, we discuss the latest capsule innovations..."
  },
  {
    id: "3",
    title: "Herba",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  },
  {
    id: "4",
    title: "Ice",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  },
  {
    id: "5",
    title: "Yang",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  },
  {
    id: "6",
    title: "Jing",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  },
  {
    id: "7",
    title: "Lin",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  },
  {
    id: "8",
    title: "Shabi",
    price: "$5",
    image: "facemask.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  }
];

// Get blog ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Find the blog post
const product = products.find(p => p.id === productId);

if (product) {
  document.getElementById("product-title").textContent = product.title;
  document.getElementById("product-price").textContent = product.price;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-content").textContent = product.content;
} else {
  document.getElementById("product-details").innerHTML = "<p>Product not found.</p>";
}
