let tables = [
  { name: "Table 101", status: "available", products: [] },
  { name: "Table 102", status: "available", products: [] },
  { name: "Table 103", status: "available", products: [] },
  { name: "Table 104", status: "available", products: [] },
  { name: "Table 105", status: "available", products: [] },
  { name: "Table 106", status: "available", products: [] },
  { name: "Table 107", status: "available", products: [] }
];

function displayTables() {
  let tableHtml = "";
  for (let i = 0; i < tables.length; i++) {
    let statusButton = "";
    if (tables[i].status === "available") {
      statusButton = `<button class="status-btn available" onclick="changeTableStatus(${i})">Available</button>`;
    } else {
      statusButton = `<button class="status-btn occupied" onclick="changeTableStatus(${i})">Occupied</button>`;
    }
    tableHtml += `
      <div class="table">
        <h3>${tables[i].name}</h3>
        ${statusButton}
        <div class="product-list" id="product-list-${i}">
          <h4>Products:</h4>
          <ul>
            ${displayProducts(i)}
          </ul>
          <div>
            <label for="product-name-${i}">Product Name:</label>
            <input type="text" id="product-name-${i}" />
          </div>
          <div>
            <label for="product-price-${i}">Product Price:</label>
            <input type="number" id="product-price-${i}" />
          </div>
          <button onclick="addProduct(${i})">Add Product</button>
        </div>
        <div class="total" id="total-${i}">
          <h4>Total: $${calculateTotal(i)}</h4>
        </div>
      </div>
    `;
  }
  document.getElementById("tables-container").innerHTML = tableHtml;
}

function displayProducts(tableIndex) {
  let productHtml = "";
  for (let i = 0; i < tables[tableIndex].products.length; i++) {
    productHtml += `
      <li>${tables[tableIndex].products[i].name} - $${tables[tableIndex].products[i].price}</li>
    `;
  }
  return productHtml;
}

function addProduct(tableIndex) {
  let productName = document.getElementById(`product-name-${tableIndex}`).value;
  let productPrice = document.getElementById(`product-price-${tableIndex}`).value;
  if (productName && productPrice) {
    tables[tableIndex].products.push({ name: productName, price: productPrice });
    displayTables();
  }
}

function calculateTotal(tableIndex) {
  let total = 0;
  for (let i = 0; i < tables[tableIndex].products.length; i++) {
    total += parseFloat(tables[tableIndex].products[i].price);
  }
  return total.toFixed(2);
}

function changeTableStatus(tableIndex) {
  if (tables[tableIndex].status === "available") {
    tables[tableIndex].status = "occupied";
  } else {
    tables[tableIndex].status = "available";
  }
  displayTables();
}

displayTables();
