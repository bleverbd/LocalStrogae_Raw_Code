const submitProduct=()=>{
 const a=document.getElementById("product_name");
 const b=document.getElementById("product_quantity");
 prductName=a.value;
 productQuantity=b.value;

 a.value="";
 b.value="";
 displayProduct(prductName,productQuantity);
 savelocalstroge(prductName,productQuantity);

}


const displayProduct=(prductName,productQuantity)=>{

    const productCointiner=document.getElementById("card_containter");
    const li=document.createElement("li");
    li.innerText=`${prductName}:${productQuantity}`;
    productCointiner.appendChild(li);
}

const checkLocalstroge=()=>{

    let cart={};
    const storeCard=localStorage.getItem('cart');
    if(storeCard)
    {
        cart=JSON.parse(storeCard);
    }
    return cart;

}

const savelocalstroge=(prductName,productQuantity)=>{

    const cart=checkLocalstroge();
    cart[prductName]=productQuantity;
    const saveStored=JSON.stringify(cart);
    localStorage.setItem('cart',saveStored);
}

const showWebpage=()=>{
    const cart= checkLocalstroge();
    for(const product in cart )
    {   
        const quantity=cart[product];
        displayProduct(product,quantity);
       
    }



}

showWebpage();