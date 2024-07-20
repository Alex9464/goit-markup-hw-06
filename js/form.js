(() => {
  document
    .querySelector('.js-speaker-form')
    .addEventListener('submit', e => {
    e.preventDefault();

      new FormData(e.currentTarget).forEach((value, vame) =>
        console.log('${name}: ${value}')
      );
  });
})();
