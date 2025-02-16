// Author: Arnold Babu
// Created: 15th Feb 2025
// Desc: JavaScript file for the delete product page

function deleteProduct(id) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products = products.filter(product => product.id !== id);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}

document.addEventListener('DOMContentLoaded', function() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let tableBody = document.getElementById('productTableBody');

    products.forEach(product => {
        let row = `<tr>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.stock}</td>
            <td>$${product.price}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
});
