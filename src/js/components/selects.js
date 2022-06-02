import Choices from "choices.js";
import _vars from '../_vars';


if (document.querySelector('.all__select')) {
  const filterSelect = new Choices(_vars.filterSelect, {
    searchEnabled: false,
    itemSelectText: '',
  });
}

if (document.querySelector('.profile-address__select')) {
  const profileAddressSelect = new Choices(_vars.profileAddressSelect, {
    searchEnabled: false,
    itemSelectText: '',
  });
}

if (document.querySelector('.profile-data__select')) {
  const profileDataSelect = new Choices(_vars.profileDataSelect, {
    searchEnabled: false,
    itemSelectText: '',
  });
}

if (document.querySelector('.city-modal')) {
  function citySelectOpen(openBtn, modal, closeBtn) {
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

  function cityChange(cityBtnName, modal, cities) {

      cities.forEach((city) => {
        city.addEventListener('click', () => {
          cityBtnName.textContent = city.textContent;
          modal.classList.remove('active');
        });
      });

  }

  citySelectOpen(_vars.cityBtn, _vars.cityModal, _vars.cityClose);
  cityChange(_vars.cityBtnName, _vars.cityModal, _vars.cities);
}


// const citySelect = new Choices('.city-modal__select', {
//   noResultsText: 'Нет результатов',
//   classNames: {
//     list: 'city-modal__select-list',
//   },
// });
