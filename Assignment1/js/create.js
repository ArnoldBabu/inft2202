// Autor: Arnold Babu
// Created: 15th Feb 2025
// Desc: JavaScript file for the create product page

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let products = JSON.parse(localStorage.getItem('products')) || [];

    let product = {
        id: Date.now(),
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        stock: document.getElementById('productStock').value,
        price: document.getElementById('productPrice').value
    };

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product Added!');
    this.reset();
});
