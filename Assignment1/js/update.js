// Autor: Arnold Babu
// Created: 15th Feb 2025
// Desc: JavaScript file for the update product page

document.getElementById('editProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get updated values from the form
    let id = document.getElementById('editProductId').value;
    let name = document.getElementById('editProductName').value;
    let description = document.getElementById('editProductDescription').value;
    let stock = document.getElementById('editProductStock').value;
    let price = document.getElementById('editProductPrice').value;
  
    // Load the products from localStorage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    // Find the index of the product by comparing as strings
    let index = products.findIndex(p => p.id.toString() === id);
    if (index !== -1) {
      // Update the product with the new details
      products[index] = { id: Number(id), name, description, stock, price };
      localStorage.setItem('products', JSON.stringify(products));
      alert("Product updated successfully!");
      window.location.href = "list.html";
    } else {
      alert("Product not found.");
    }
  });
  