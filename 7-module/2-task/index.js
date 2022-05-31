import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
 
  }
  open() {
    
    const createModal = `<div class="modal">
  
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
     
        </h3>
      </div>

      <div class="modal__body">
  
      </div>
    </div>
  </div>`;

  const modal = createElement(createModal);
  const title = modal.querySelector('.modal__title');
  const body = modal.querySelector('.modal__body');
  const closeModal = modal.querySelector('.modal__close');

  const close = () => {
    document.body.classList.remove('is-modal-open');
    modal.remove();
  }
  
  const keyClose = (e) => {
    if(e.code === 'Escape') {
      console.log(e.code)
      document.body.classList.remove('is-modal-open');
      modal.remove()
      document.removeEventListener('keydown', keyClose);
    }
  }

  closeModal.addEventListener('click', close);
  document.body.addEventListener('keydown', keyClose);
  title.textContent = this.modalTitle;
  body.innerHTML = '';
  body.append(this.modalBody);



  document.body.classList.add('is-modal-open');
  document.body.append(modal);

  };
  
  setTitle(title) {
    this.modalTitle = title
    const elemTitle = document.querySelector('.modal__title');
    if(elemTitle) {
      elemTitle.textContent = title;
    }
    
  };
  setBody(noda) {
    this.modalBody = noda;
    const elemBody = document.querySelector('.modal__body');
    if(elemBody){
      elemBody.innerHTML = "";
      elemBody.append(noda);
    }
  };

  close() {
    const modal = document.querySelector('.modal');
    if(modal) {
      document.body.classList.remove('is-modal-open');
      modal.remove()
    }
  };
}
