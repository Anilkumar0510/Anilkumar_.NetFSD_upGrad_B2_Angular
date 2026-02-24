let db;

// ✅ Open / Create DB
const request = indexedDB.open("ExpenseDB", 1);

// CREATE TABLE equivalent
request.onupgradeneeded = function (event) {
  db = event.target.result;

  // Create object store (table)
  const store = db.createObjectStore("expenses", {
    keyPath: "id",
    autoIncrement: true
  });

  // Create indexes (optional but good practice)
  store.createIndex("title", "title", { unique: false });
  store.createIndex("amount", "amount", { unique: false });
  store.createIndex("date", "date", { unique: false });
};

// Success opening DB
request.onsuccess = function (event) {
  db = event.target.result;
  console.log("Database opened successfully");
};

// Handle DB error
request.onerror = function () {
  console.error("Database failed to open");
};


// ✅ INSERT (Add Expense)
function addExpense() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  if (!title || !amount || !date) {
    alert("Please fill all fields");
    return;
  }

  const transaction = db.transaction(["expenses"], "readwrite");

  transaction.onerror = () => alert("Transaction failed");

  const store = transaction.objectStore("expenses");

  const expense = { title, amount, date };

  const request = store.add(expense);

  request.onsuccess = () => {
    alert("Expense added!");
    viewExpenses();
  };

  request.onerror = () => alert("Insert failed");
}


// ✅ SELECT (View Expenses)
function viewExpenses() {
  const transaction = db.transaction(["expenses"], "readonly");
  const store = transaction.objectStore("expenses");
  const request = store.getAll();

  request.onsuccess = function () {
    const list = document.getElementById("expenseList");
    list.innerHTML = "";

    request.result.forEach(item => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
        <td>
          <button onclick="deleteExpense(${item.id})">Delete</button>
        </td>
      `;

      list.appendChild(row);
    });
  };

  request.onerror = () => alert("Fetch failed");
}


// ✅ DELETE Expense
function deleteExpense(id) {
  const transaction = db.transaction(["expenses"], "readwrite");

  transaction.onerror = () => alert("Delete transaction failed");

  const store = transaction.objectStore("expenses");
  const request = store.delete(id);

  request.onsuccess = () => {
    alert("Expense deleted");
    viewExpenses();
  };

  request.onerror = () => alert("Delete failed");
}