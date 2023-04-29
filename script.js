// Initialize the room status as available for all rooms
let rooms = {
  101: { status: "available", total: 0, products: [] },
  102: { status: "available", total: 0, products: [] },
  103: { status: "available", total: 0, products: [] },
  104: { status: "available", total: 0, products: [] },
  105: { status: "available", total: 0, products: [] },
  106: { status: "available", total: 0, products: [] },
  107: { status: "available", total: 0, products: [] },
};

// Function to toggle room status
function toggleStatus(roomNumber) {
  const room = rooms[roomNumber];
  if (room.status === "available") {
    room.status = "occupied";
    document.getElementById(roomNumber).classList.remove("available");
    document.getElementById(roomNumber).classList.add("occupied");
  } else {
    room.status = "available";
    document.getElementById(roomNumber).classList.remove("occupied");
    document.getElementById(roomNumber).classList.add("available");
  }
}

// Function to add product and price to the room
function addProduct(roomNumber, product, price) {
  const room = rooms[roomNumber];
  room.products.push({ product: product, price: price });
  room.total += price;
  document.getElementById(`${roomNumber}-total`).textContent = room.total;
  document.getElementById(roomNumber).classList.add("occupied");
}

// Function to clear the room
function clearRoom(roomNumber) {
  const room = rooms[roomNumber];
  room.status = "available";
  room.total = 0;
  room.products = [];
  document.getElementById(`${roomNumber}-total`).textContent = "";
  document.getElementById(roomNumber).classList.remove("occupied");
  document.getElementById(roomNumber).classList.add("available");
}

// Add event listeners to all room squares
const roomSquares = document.querySelectorAll(".room");
roomSquares.forEach((square) => {
  square.addEventListener("click", () => {
    const roomNumber = square.id;
    const room = rooms[roomNumber];
    if (room.status === "available") {
      const product = prompt("Enter product name:");
      const price = parseInt(prompt("Enter product price:"));
      if (product && price) {
        addProduct(roomNumber, product, price);
      }
    } else {
      const confirmClear = confirm(
        `Are you sure you want to clear room ${roomNumber}?`
      );
      if (confirmClear) {
        clearRoom(roomNumber);
      }
    }
  });
});
