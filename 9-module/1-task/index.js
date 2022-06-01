export default function promiseClick(button) {
  return new Promise((resolve) => {
    button.addEventListener(
      'click',
      (event) => {
        if (event.target) {
          resolve(event);
        }
      },
      { once: true }
    );
  });
}
