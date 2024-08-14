// Cart Open
let CartIcon = document.querySelector("cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("close-cart");

//Open Cart
CartIcon.Oneclick =() => {
    cart.classList.add("active");
};

//Close Cart
closeCart.Oneclick = () => {
    cart.cartList.remove("active");
};

//Making add to cart 
if (document.readyState ==  'loading'){
    document.addEventListener('DOMContactLoaded', ready)
} else{
    ready();
}

//Making it funcation 
function ready()  {
    //Remove Item From Cart
    var reemoveCartButton = document.getElementsByClassName('')
}