import _vars from '../_vars';

function headerSearch(input, outer, list, close) {
  input.addEventListener('input', () => {
    input.classList.add('active');
    list.classList.add('active');
    close.classList.add('active');
  });

  if (window.innerWidth <= 1024) {
    outer.addEventListener('mouseenter', () => {
      close.classList.add('active');
      outer.classList.add('mob-active');
    });
  }

  close.addEventListener('click', () => {
    input.classList.remove('active');
    input.value = '';
    list.classList.remove('active');
    close.classList.remove('active');
    outer.classList.remove('mob-active');
  });

  outer.addEventListener('mouseover', () => {
    if(input.value) {
      close.classList.add('active');
      input.classList.add('active');
      list.classList.add('active');
    }
  });

  outer.addEventListener('mouseout', ()=> {
    input.classList.remove('active');
    close.classList.remove('active');
    list.classList.remove('active');
  })
}

function currencyAcc(mainBtn, btns, span) {
  btns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      let targ = e.target;
      let spann = targ.querySelector('.header__currency-list-btn-span');
      span.textContent = spann.textContent;

      console.log(spann);
    });
  });
}

function langAcc(mainBtn, btns, span) {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      span.textContent = btn.textContent;
    });
  });
}

function cartShow(cartOuter, close, cartCard) {
  cartOuter.addEventListener('mouseover', function () {
    cartCard.classList.add('active');
  });

  cartOuter.addEventListener('mouseout', function () {
    cartCard.classList.remove('active');
  });

  close.addEventListener('click', function () {
    cartCard.classList.remove('active');
  });
}

function headerLinkAddActive(headerLink) {
  headerLink.forEach(link => {
    if(link.href == document.URL) {
      link.classList.add('active');
    }
  });
}

headerSearch(_vars.headerSearchInput, _vars.headerSearchOuter, _vars.headerSearchList, _vars.headerSearchClose);
langAcc(_vars.langBtn, _vars.langListBtns, _vars.langSpanBtn);
currencyAcc(_vars.curBtn, _vars.curListBtns, _vars.curSpanBtn);
cartShow(_vars.cartOuter, _vars.cartClose, _vars.cartCard);
headerLinkAddActive(_vars.headerLink);
