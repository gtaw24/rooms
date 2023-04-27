var tables = {
	101: {
		status: 'available',
		products: [],
		total: 0
	},
	102: {
		status: 'available',
		products: [],
		total: 0
	},
	103: {
		status: 'available',
		products: [],
		total: 0
	},
	104: {
		status: 'available',
		products: [],
		total: 0
	},
	105: {
		status: 'available',
		products: [],
		total: 0
	},
	106: {
		status: 'available',
		products: [],
		total: 0
	},
	107: {
		status: 'available',
		products: [],
		total: 0
	}
};

function toggleTableStatus(tableStatusId) {
	var status = document.getElementById(tableStatusId);
	var tableNumber = tableStatusId.replace('table', '');
	var table = tables[tableNumber];

	if (table.status === 'available') {
		table.status = 'occupied';
		status.innerHTML = 'Occupied';
	} else {
		table.status = 'available';
		status.innerHTML = 'Available';
	}
}

function addProductToTable(tableNumber, productName, productPrice) {
	var table = tables[tableNumber];
	table.products.push({ name: productName, price: productPrice });
	table.total += productPrice;

	var productList = document.getElementById('table' + tableNumber + 'productlist');
	var productItem = document.createElement('li');
	productItem.innerHTML = productName + ' - $' + productPrice.toFixed(2);
	productList.appendChild(productItem);

	var total = document.getElementById('table' + tableNumber + 'total');
	total.innerHTML = '$' + table.total.toFixed(2);
}

