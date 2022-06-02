import _vars from "../_vars"

if(document.querySelector('.ordering__delivery-method')) {
  function ordDelMethod(radios) {
    radios.forEach(radio => {
      radio.addEventListener('click', () => {
        radios.forEach(radio => {
          radio.classList.remove('active');
        });

        radio.classList.add('active');
      })
    });
  }

  ordDelMethod(_vars.orderingDelMethod);
}
