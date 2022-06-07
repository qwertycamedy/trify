import _vars from '../_vars';

if (document.querySelector('.ordering-s-modal')) {
  function orderingSucFullOpen(modal, closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    if (document.querySelector('.ordering-s-modal__active')) {
      modal.classList.add('active');
    }

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  orderingSucFullOpen(_vars.ordSucFullModal, _vars.ordSucFullModalClose);
}

if (document.querySelector('.cart-s-modal')) {
  function cartSucFullOpen(modal, closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    if (document.querySelector('.cart-s-modal__active')) {
      modal.classList.add('active');
    }

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  cartSucFullOpen(_vars.cartSucFullModal, _vars.cartSucFullModalClose);
}

if (document.querySelector('.cancel-order-modal')) {
  function cancelOrderModalOpen(modal, openBtn, closeBtn, yesBtn, noBtn) {
    openBtn.forEach(btn => {
      btn.addEventListener('click', function () {
        modal.classList.add('active');
      });
    });

    yesBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    noBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  cancelOrderModalOpen(_vars.cancelOrderModal, _vars.cancelOrderModalOpen, _vars.cancelOrderModalClose, _vars.cancelOrderModalYes,
    _vars.cancelOrderModalNo);
}

if (document.querySelector('.restore-pass')) {
  function restorePassModalOpen(modal, closeBtn, openNext, codeModal) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    openNext.addEventListener('click', function () {
      modal.classList.remove('active');
      codeModal.classList.add('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  restorePassModalOpen(_vars.restorePassModal, _vars.restorePassModalClose, _vars.restorePassModalBtn, _vars.restoreEnterCodeModal);
}

if (document.querySelector('.restore-pass__enter-code')) {
  function restoreEnterCodeModalOpen(modal, closeBtn, openNext, newPassModal) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    openNext.addEventListener('click', function () {
      modal.classList.remove('active');
      newPassModal.classList.add('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  restoreEnterCodeModalOpen(_vars.restoreEnterCodeModal, _vars.restoreEnterCodeModalClose, _vars.restoreEnterCodeModalNext,
    _vars.newPassModal);
}

if (document.querySelector('.new-pass')) {
  function newPassModalOpen(modal, closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  newPassModalOpen(_vars.newPassModal, _vars.newPassModalClose);
}

if (document.querySelector('.sign-modal')) {
  function newPassModalOpen(modal, closeBtn, openBtn) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('active');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  newPassModalOpen(_vars.signModal, _vars.signModalClose, _vars.signModalOpen);
}


if (document.querySelector('.sf-reg')) {
  function newPassModalOpen(modal, closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', function (e) {
      let targ = e.target;

      if (targ == this) {
        modal.classList.remove('active');
      }
    });
  }

  newPassModalOpen(_vars.sfModal, _vars.sfModalClose);
}

if (document.querySelector('.categories-btn')) {
  function categoriesOpen(openBtn, modal, closeBtn, body, activateBtn) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('active');
      body.classList.add('overflow-h');
    });
    activateBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      body.classList.remove('overflow-h');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      body.classList.remove('overflow-h');
    });

  }

  categoriesOpen(_vars.categoriesOpen, _vars.categoriesModal, _vars.categoriesClose, _vars.bodyEl, _vars.categoriesAct);
}
if (document.querySelector('.settings-btn')) {
  function settingsOpen(openBtn, modal, closeBtn, body, activateBtn) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('active');
      body.classList.add('overflow-h');
    });
    activateBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      body.classList.remove('overflow-h');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
      body.classList.remove('overflow-h');
    });

  }

  settingsOpen(_vars.settingsOpen, _vars.settingsModal, _vars.settingsClose, _vars.bodyEl, _vars.settingsAct);
}

if (document.querySelector('.type-modal')) {
  function typeOpen(openBtn, modal, closeBtn, activateBtn) {
    openBtn.addEventListener('click', function () {
      modal.classList.add('active');
    });
    activateBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });
    closeBtn.addEventListener('click', function () {
      modal.classList.remove('active');
    });

  }

  typeOpen(_vars.typeOpen, _vars.typeModal, _vars.typeClose, _vars.typeAct);
}

function langOpen(outer, btn, modal) {
  if (window.innerWidth >= 1025) {
    outer.addEventListener('mouseenter', () => {
      outer.classList.add('active');
    });
    outer.addEventListener('mouseleave', () => {
      outer.classList.remove('active');
    });
  } else {
    btn.addEventListener('click', () => {
      outer.classList.toggle('active');
    });
    outer.addEventListener('mouseleave', () => {
      outer.classList.remove('active');
    });
  }
}

function currencyOpen(outer, btn, modal) {
  if (window.innerWidth >= 1025) {
    outer.addEventListener('mouseenter', () => {
      outer.classList.add('active');
    });
    outer.addEventListener('mouseleave', () => {
      outer.classList.remove('active');
    });
  } else {
    btn.addEventListener('click', () => {
      outer.classList.toggle('active');
    });
    outer.addEventListener('mouseleave', () => {
      outer.classList.remove('active');
    });
  }
}

langOpen(_vars.langOuter, _vars.langBtn, _vars.langList);
currencyOpen(_vars.currencyOuter, _vars.currencyBtn, _vars.currencyList);
