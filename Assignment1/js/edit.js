// Author: Arnold Babu
// Created: 15th Feb 2025
// Desc: JavaScript file for the edit product page

// Get the product id from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (!productId) {
  alert("No product selected.");
  window.location.href = "list.html";
} else {
  // Get the products array from localStorage or use an empty array
  let products = JSON.parse(localStorage.getItem('products')) || [];
  // Find the product; compare IDs as strings
  let product = products.find(p => p.id.toString() === productId);
  if (!product) {
    alert("Product not found.");
    window.location.href = "list.html";
  } else {
    // Fill the form fields with current product details
    document.getElementById('editProductName').value = product.name;
    document.getElementById('editProductDescription').value = product.description;
    document.getElementById('editProductStock').value = product.stock;
    document.getElementById('editProductPrice').value = product.price;
    document.getElementById('editProductId').value = product.id;
  }
}


