const state = {
    products: [
        "iPhone 14",
        "Samsung Galaxy S23",
        "Sony Headphones",
        "Dell Laptop",
        "Apple Watch",
        "HP Printer",
        "Bluetooth Speaker",
        "Gaming Mouse",
        "Keyboard",
        "Smart TV"
    ],
    filteredProducts: []
};

const searchBox = document.getElementById("searchBox");
const productList = document.getElementById("productList");
const noResult = document.getElementById("noResult");

function renderProducts(products){

    productList.innerHTML = "";

    if(products.length === 0){
        noResult.classList.remove("hidden");
        return;
    }

    noResult.classList.add("hidden");

    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        li.dataset.name = product;
        productList.appendChild(li);
    });
}

function filterProducts(keyword){

    keyword = keyword.toLowerCase();

    state.filteredProducts = state.products.filter(product =>
        product.toLowerCase().includes(keyword)
    );

    renderProducts(state.filteredProducts);
}

function handleSearchInput(e){
    const value = e.target.value;
    filterProducts(value);
}

function handleProductClick(e){

    const li = e.target.closest("li");
    if(!li) return;

    alert("Selected product: " + li.dataset.name);
}

function init(){
    state.filteredProducts = [...state.products];
    renderProducts(state.filteredProducts);

    searchBox.addEventListener("input", handleSearchInput);
    productList.addEventListener("click", handleProductClick);
}

init();