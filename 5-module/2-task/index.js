function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const div = document.querySelector('#text');
  function handler() {
    div.hidden = !div.hidden;
}
  btn.addEventListener('click', handler);
}
