// Get the elements
const room = document.getElementById('101');
const popup = document.getElementById('popup');
const addProductBtn = document.getElementById('add-product-btn');
const clearRoomBtn = document.getElementById('clear-room-btn');
const generateInvoiceBtn = document.getElementById('generate-invoice-btn');

// Set initial product and price totals to 0
let products = 0;
let prices = 0;

// Add click event to the room
room.addEventListener('click', () => {
   popup.style.display = 'block';
});

// Add click event to the Add or Remove Products and Prices button
addProductBtn.addEventListener('click', () => {
   // TODO: Add logic for adding or removing products and prices
});

// Add click event to the Clear Room button
clearRoomBtn.addEventListener('click', () => {
   // TODO: Add logic for clearing the room
});

// Add click event to the Generate Invoice button
generateInvoiceBtn.addEventListener('click', () => {
   const webhookUrl = 'https://discord.com/api/webhooks/1101915766879698984/1oNZ1i3KYKX6umSYtgiiskq7VPCovFWGHN4sIyhNyidcuuTsT3yvtwKVY_S3GxFiJ7NF';

   // TODO: Add logic for generating and sending the invoice to the webhook
});
