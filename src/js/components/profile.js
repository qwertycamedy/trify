import _vars from "../_vars";

if(document.querySelector('.profile__tab')) {

  if(document.querySelector('#profile-2')) {
    function addAddress(firstScr, secondScr, addBtn, saveBtn) {
      addBtn.addEventListener('click', function() {
        firstScr.classList.remove('active');
        secondScr.classList.add('active');
      });

      saveBtn.addEventListener('click', function() {
        firstScr.classList.add('active');
        secondScr.classList.remove('active');
      });
    }

    addAddress(_vars.profileAddress, _vars.profileAddressAdd, _vars.profileAddressAddBtn, _vars.profileAddressSaveBtn);
  }

  if(document.querySelector('#profile-3')) {
    function closeOrder(firstScr, secondScr, addBtn, saveBtn) {
      addBtn.forEach(btn => {
        btn.addEventListener('click', function() {
          firstScr.classList.remove('active');
          secondScr.classList.add('active');
          console.log('я работаю')
        });
      });

      saveBtn.addEventListener('click', function() {
        firstScr.classList.add('active');
        secondScr.classList.remove('active');
      });
    }


    closeOrder(_vars.profileOrders, _vars.profileOrdersAdd, _vars.profileOrdersAddBtn, _vars.profileOrdersSaveBtn);
    }

  if(document.querySelector('#profile-4')) {

  function addCards(firstScr, secondScr, addBtn, saveBtn) {
    addBtn.addEventListener('click', function() {
      firstScr.classList.remove('active');
      secondScr.classList.add('active');
    });

    saveBtn.addEventListener('click', function() {
      firstScr.classList.add('active');
      secondScr.classList.remove('active');
    });
  }

  addCards(_vars.profileCards, _vars.profileCardsAdd, _vars.profileCardsAddBtn, _vars.profileCardsSaveBtn);
  }
}
