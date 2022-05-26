import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.createMenu(categories);
  }
  createLink(options) {
    const link = `<a href="#" class="ribbon__item" data-id="${options.id}">${options.name}</a>`;
    const linkMenu = createElement(link);
    return linkMenu;
  };
  createButton(arrow) {
    const template = `  <button class="ribbon__arrow ribbon__arrow_${arrow} ribbon__arrow_visible">
    <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
  </button>`;
  const btn = createElement(template);
  return btn;
  };
  createMenu(coll) {
    const menu = document.createElement('DIV');
    const btnRight = this.createButton('right');
    const btnLeft = this.createButton('left');
    const containerNav = document.createElement('NAV');
    menu.classList.add('ribbon');
    containerNav.classList.add('ribbon__inner');
    menu.append(btnRight);
    menu.append(btnLeft);
    menu.append(containerNav);

    for (const key of coll) {
      containerNav.append(this.createLink(key));
      
    }

    containerNav.addEventListener('scroll', () => {
      console.log(scroll)

      const clientWidth = containerNav.clientWidth;
      const scrollWidth = containerNav.scrollWidth;
      const scrollLeft = containerNav.scrollLeft;
   
      const right = scrollWidth - clientWidth - scrollLeft;
      if (right < 1) {
        btnRight.classList.remove('ribbon__arrow_visible');
      } else {
        btnRight.classList.add('ribbon__arrow_visible');
      }
      if (scrollLeft > 1) {
        btnLeft.classList.add('ribbon__arrow_visible');
      } else {
        btnLeft.classList.remove('ribbon__arrow_visible');
      }
    });

    menu.addEventListener('click', e => {
      if (e.target.closest('.ribbon__arrow_right')) {
        containerNav.scrollBy(350, 0);
      }else if(e.target.closest('.ribbon__arrow_left')) {
        containerNav.scrollBy(-350, 0);
      }
      if (e.target.closest('.ribbon__item')) {
        e.preventDefault();

      }

    });
     containerNav.addEventListener('click', e => {
      const items = document.querySelectorAll('.ribbon__item');
      const id = e.target.dataset.id;
      items.forEach((i) => {
        if(i.classList.contains('.ribbon__item_active')) {
          i.classList.remove('.ribbon__item_active')
        }
      });
      e.target.classList.add('ribbon__item_active');
      const costomEvent = new CustomEvent('ribbon-select', {

        bubbles: true,
        detail: id,
      });
      menu.dispatchEvent(costomEvent);
    
    })
    return menu;
  }
}
