const products = [
    { name: "rice", price: 1500, quantity: 3 },
    { name: "Veg Oil", price: 150, quantity: 2 },
    { name: "dal", price: 50, quantity: 1 }
];
const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

const invoiceLines = products.map(item =>
    `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity} | Subtotal: ₹${item.price * item.quantity}`
);

const totalAmount = calculateTotal(products);

console.log(`
======= INVOICE =======
${invoiceLines.join("\n")}
-----------------------
Total Amount: ₹${totalAmount}
=======================
`);