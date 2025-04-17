  const submitProduct = () => {
    const a = document.getElementById("product_name");
    const b = document.getElementById("product_quantity");
    const productName = a.value;
    const productQuantity = b.value;

    a.value = "";
    b.value = "";

    displayProduct(productName, productQuantity);
    saveToLocalStorage(productName, productQuantity);
};

const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById("card_containter");
    const li = document.createElement("li");
    li.innerText = `${productName}: ${productQuantity}`;
    productContainer.appendChild(li);
};



const getCartFromLocalStorage = () => {
    let cart = [];
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
};

const saveToLocalStorage = (productName, productQuantity) => {
    const cart = getCartFromLocalStorage();
    cart.push({ name: productName, quantity: productQuantity });
    const saveStored=JSON.stringify(cart);
    localStorage.setItem('cart',saveStored);

};


const showWebpage = () => {
    const cart = getCartFromLocalStorage();
    cart.map(item => {
        displayProduct(item.name, item.quantity);
    });
    
};

showWebpage();
