// Blog data (normally you'd fetch this from a server or JSON file)
const blogs = [
  {
    id: "1",
    title: "Herbal Benefits Explained",
    date: "17 July 2025",
    image: "ce543ea2fb98a1041a104d44b9f4c221_resize.jpg",
    content: "This article explores the benefits of herbal products and their uses in modern health..."
  },
  {
    id: "2",
    title: "Capsule Trends in 2025",
    date: "20 July 2025",
    image: "ce543ea2fb98a1041a104d44b9f4c221_resize.jpg",
    content: "Capsules are evolving in the health industry. In this article, we discuss the latest capsule innovations..."
  },
  {
    id: "3",
    title: "The Importance of Natural Remedies",
    date: "25 July 2025",
    image: "ce543ea2fb98a1041a104d44b9f4c221_resize.jpg",
    content: "Natural remedies have been used for centuries. Here’s why they’re making a strong comeback..."
  }
];

// Get blog ID from URL
const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

// Find the blog post
const blog = blogs.find(b => b.id === blogId);

if (blog) {
  document.getElementById("blog-title").textContent = blog.title;
  document.getElementById("blog-date").textContent = blog.date;
  document.getElementById("blog-image").src = blog.image;
  document.getElementById("blog-content").textContent = blog.content;
} else {
  document.getElementById("blog-detail").innerHTML = "<p>Blog post not found.</p>";
}
