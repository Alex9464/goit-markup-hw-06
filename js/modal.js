const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};
document.body.classList.remove('modal-open');

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  const isHidden = refs.backdrop.classList.toggle('is-hidden');
  if (isHidden) {
    document.body.classList.remove('modal-open');
  } else {
    document.body.classList.add('modal-open');
  }
}

function logBackdropClick() {
  console.log('клик в бекдроп');
}

