import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem;
    this.render()
    this.productsCard()
    this.updateFilter()
  }
  render() {
    this.elem = createElement (`<div class="products-grid">
    <div class="products-grid__inner">
    
    </div>
  </div>`);
   return this.elem
     };

     productsCard() {
       const gridInner = this.elem.querySelector('.products-grid__inner');
       let cardProduct = this.products.map(item => new ProductCard(item));
      

       for(let i = 0; i < cardProduct.length; i++) {
        gridInner.append(cardProduct[i].elem);
       }
     };

     updateFilter(filters) {

      this.filters = Object.assign(this.filters, filters);
   

      let filtProduct = [];

      for (let product in this.products) {
       
        if(this.filters.noNuts && this.products[product].nuts){ 
          continue;
        }
         
        if(this.filters.vegeterianOnly && !this.products[product].vegeterian){ 
          continue;
        }
        
        if(this.filters.maxSpiciness !== undefined && this.products[product].spiciness > this.filters.maxSpiciness){ 
          continue;
        }
        
        if(this.filters.category && this.products[product].category != this.filters.category){ 
          continue;
        }
        
        filtProduct.push(this.products[product]);
      
      }

      const gridInner = this.elem.querySelector('.products-grid__inner');
      let cardProduct = filtProduct.map(item => new ProductCard(item));

      gridInner.innerHTML = '';
     
      for(let i = 0; i < cardProduct.length; i++) {
       gridInner.append(cardProduct[i].elem);
      }



      

    



     }
}
