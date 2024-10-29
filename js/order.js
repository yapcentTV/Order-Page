let selectedItem = "";
let itemPrice = 0;
function selectItem(itemName, price) {
    selectedItem = itemName;
    itemPrice = price;
    document.getElementById("selected-item").textContent = itemName;
    document.getElementById("item-price").textContent = price;
    updateTotal();
}
function updateTotal() {
    const quantity = document.getElementById("quantity").value;
    const totalAmount = itemPrice * quantity;
    document.getElementById("total-amount").textContent = totalAmount;
}
function placeOrder() {
    if (!selectedItem) {
        alert("Please select an item.");
        return;
    }
    const quantity = document.getElementById("quantity").value;
    const totalAmount = itemPrice * quantity;
    alert(`Order placed for ${quantity} x ${selectedItem} - Total: ₱${totalAmount}`);
    resetOrder();
}
function cancelOrder() {
    resetOrder();
}
function resetOrder() {
    selectedItem = "";
    itemPrice = 0;
    document.getElementById("selected-item").textContent = "None";
    document.getElementById("item-price").textContent = "0";
    document.getElementById("quantity").value = 1;
    document.getElementById("total-amount").textContent = "0";
}
