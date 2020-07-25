 var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100+1);
 var sent = {itemName: item, itemPrice: price}
 cart.push(sent);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here

    if (cart.length ===0){
      return "Your shopping cart is empty."
    }
    var say = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    if(cart.length === 1){
      return `${say}.`
    }
     for(let i = 1; i < cart.length - 1;i++){
      say = `${say}, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
      return `${say}, and ${cart[i].itemName} at $${cart[i].itemPrice}.`






}

function total() {
  // write your code here
  var sum = cart.itemPrice
  var hex = 0
  for (var i=0; i<cart; i++){
    hex = hex + cart[i].itemPrice;
    return hex
  }
}

function removeFromCart(item) {
  // write your code here

}

function placeOrder(cardNumber) {
  // write your code here
}
