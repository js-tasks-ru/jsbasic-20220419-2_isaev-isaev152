function highlight(table) {
  const tr = table.querySelectorAll('tr');
  for (let elem of tr) {
    for (let item of elem.cells) {
      if (item.hasAttribute('data-available')) {

        switch (item.dataset.available) {
          case 'true':
          elem.classList.add('available');
          break;
          case 'false':
            elem.classList.add('unavailable');
          break;  
        }
          
      }else elem.setAttribute('hidden', true);
      
      switch (item.innerHTML) {
        case 'm':
          elem.classList.add('male');
          break;
        case 'f':
          elem.classList.add('female');
      }
      if (+item.innerHTML < 18) {
        elem.style.textDecoration = 'line-through';
      }
    }
  }
}
