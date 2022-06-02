if(document.querySelector('input[type="tel"]')) {
  let inputs = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+9 (999) 999-99-99');
  im.mask(inputs);
}

if(document.querySelector('#code')) {
  let code = document.querySelector('#code');
  let codeIM = new Inputmask('99999');
  codeIM.mask(code);
}
