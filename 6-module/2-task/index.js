import createElement from '../../assets/lib/create-element.js';


export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.holder = document.querySelector('#holder');
    this.elem = this.render(product); 
    // this.addProduct(obj)
    
  }
  render(obj) {
    const productName = obj.name;
    const productImg = obj.image;
    const productPrice = obj.price.toFixed(2)
    const create = `<div class="card">
    <div class="card__top">
        <img src="../../assets/images/products/${productImg}" class="card__image" alt="product">
        <span class="card__price">€${productPrice}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${productName}</div>
        <button type="button" class="card__button">
            <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    </div>`;

    const card = createElement(create);
       const btn = card.querySelector('.card__button');
       btn.addEventListener('click', (event) => {
         if(event.target.closest('.card__button')) {
           const btnProduct = new CustomEvent('product-add', {
             bubbles: true,
             detail: obj.id,
           });
           card.dispatchEvent(btnProduct);
       }
      })
      return card;
     };
  }
 
  
