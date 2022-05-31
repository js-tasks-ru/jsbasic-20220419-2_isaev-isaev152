export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product === undefined || product === null || product.length == 0){
      return;
    }
    let cartItem = { 

      product: product,
      count: 1
    };

    let productFound = this.cartItems.some((item) => item.product.id === product.id);

    if(productFound == false){
      this.cartItems.push(cartItem);
   
    }else if(productFound == true){
      let cartItem = this.cartItems.find(item => item.product.id === product.id);
      cartItem.count ++;
      
    };
    this.onProductUpdate(cartItem);
  };

  updateProductCount(productId, amount) {
    let cartItem = this.cartItems.find(cartItem => {
      return cartItem.product.id == productId;
    });

    if(amount == 1){
      cartItem.count ++;
    } else if(amount == -1) {
      cartItem.count --;

      if(cartItem.count == 0){
        let item = this.cartItems.indexOf(cartItem);
        this.cartItems.splice(item, 1);
      }
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length == 0 ? true : false;
  }

  getTotalCount() {
    let totalCount = 0;
    this.cartItems.forEach((cartItem) => {
      return totalCount += cartItem.count;
    });
    return totalCount;
  }

  getTotalPrice() {
    let totalPrice = 0; 
    this.cartItems.forEach((cartItem) => {
      return totalPrice += cartItem.count * cartItem.product.price;
    });
    return totalPrice;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

