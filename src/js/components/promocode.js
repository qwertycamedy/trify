import _vars from "../_vars";

if(document.querySelector('.promocode-form')) {
  function ActivatePromocode(input, btn) {
    input.addEventListener('input', ()=> {
      if(input.value) {
        input.classList.add('active');
        btn.classList.add('active');
        btn.classList.remove('disable');
      } else {
        input.classList.remove('active');
        btn.classList.remove('active');
        btn.classList.add('disable');
      }

    });
  }

  ActivatePromocode(_vars.promocodeInput, _vars.promocodeBtn);
}
