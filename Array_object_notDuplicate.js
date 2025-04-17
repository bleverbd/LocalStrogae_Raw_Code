const submitProduct = () => {
    const nameField = document.getElementById("product_name");
    const quantityField = document.getElementById("product_quantity");

    const productName = nameField.value;
    const productQuantity = quantityField.value;

    if (!productName || !productQuantity) {
        alert("Please fill in both Product Name and Quantity!");
        return;
    }

    // const isNumber = typeof(productQuantity);
    // console.log(isNumber);

    //  if(isNumber==="number")
    //  {
    //     alert("Product Quantity must be a number!");
    //     return;
    //  }

    if (isNaN(productQuantity)) {
        alert("Product Quantity must be a number!");
        return;
    }
    

    nameField.value = "";
    quantityField.value = "";

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
    const isDuplicate = cart.some(item => item.name.toLowerCase() === productName.toLowerCase());
    const isNull = cart.some(item => item.name ===null);
    if(isNull){
        alert("This product name is Null!");
        return;
    }
    if (isDuplicate) {
        alert("This product name already exists!");
        return;
    }
    
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
