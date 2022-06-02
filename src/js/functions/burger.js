(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const header = document?.querySelector('.header');
  const body = document.querySelector('.page__body');

  burger?.addEventListener('click', (e) => {
    body?.classList.toggle('overflow-h')
    burger?.classList.toggle('active');
    menu?.classList.toggle('active');
    header?.classList.toggle('active');
  });
})();
