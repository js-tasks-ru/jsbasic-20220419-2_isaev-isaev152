function hideSelf() {
  const btn = document.querySelector('.hide-self-button');
  btn.addEventListener('click', hideSelf );
  btn.hidden = true;
}
