export default {
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  //city-modal
  cityBtn: document?.querySelector('.header__city-btn'),
  cityBtnName: document?.querySelector('.city-name'),
  cityModal: document?.querySelector('.city-modal'),
  cityClose: document?.querySelector('.city-modal__close'),
  cities: document?.querySelectorAll('.city-modal__list-btn'),
  //catalog-modal
  catalogModals: document?.querySelectorAll('.catalog__modal'),
  catalogBtns: document?.querySelectorAll('.header__catalog-head-btn'),
  headerCatalogModals: document?.querySelectorAll('.catalog-modal'),

  cartBtn: document?.querySelector('.cart-btn'),
  cartModal: document?.querySelector('.header__cart-list-outer'),

  //header els
  headerSearchInput: document?.querySelector('.header__search'),
  headerSearchOuter: document?.querySelector('.header__search-form'),
  headerSearchList: document?.querySelector('.header__search-list'),
  headerSearchClose: document?.querySelector('.header__search-close'),

  headerLink: document?.querySelectorAll('.header__btn'),

  curBtn: document?.querySelector('.header__currency-btn'),
  curListBtns: document?.querySelectorAll('.header__currency-list-btn'),
  curSpanBtn: document?.querySelector('.header__currency-btn-span'),
  langBtn: document?.querySelector('.header__lang-btn'),
  langListBtns: document?.querySelectorAll('.header__lang-list-btn'),
  langSpanBtn: document?.querySelector('.header__lang-btn-span'),

  cartOuter: document?.querySelector('#cartOuter'),
  cartClose: document?.querySelector('.header__cart-list-header-close'),
  cartCard: document?.querySelector('.header__cart-list-outer'),

  //accordions
  footerAcc: document?.querySelectorAll('.footer__menu-outer'),
  faqAcc: document?.querySelectorAll('.faq__list-item'),
  catalogAcc: document?.querySelectorAll('.catalog__acc'),
  filterAcc: document?.querySelectorAll('.categories__list-item'),
  filterAccBtn: document?.querySelectorAll('.filter-acc__btn'),
  headerCatalog: document?.querySelectorAll('.header__catalog-head-item'),

  //tabs
  profileTabBtns: document?.querySelectorAll('.profile__tab-btn'),
  profileMainBtn: document?.querySelector('.profile-btn'),

  productTabBtn: document?.querySelectorAll('.product-tab__btn'),
  productTabContent: document?.querySelectorAll('.product-tab__content'),

  productTabReviewBtn: document?.querySelectorAll('.product-tab__review-btn'),
  productTabReviewContent: document?.querySelectorAll('.product-tab__review-content'),

  //selects
  profileDataSelect: document?.querySelector('.profile-data__select'),
  profileAddressSelect: document?.querySelector('.profile-address__select'),
  filterSelect: document?.querySelector('#filter-select'),

  sellerTabLinks: document?.querySelectorAll('.seller-tab__list-link'),

  //profile
  profileAddress: document?.querySelector('.profile-address'),
  profileAddressAdd: document?.querySelector('.profile-address-add'),
  profileAddressAddBtn: document?.querySelector('.profile-address__add'),
  profileAddressSaveBtn: document?.querySelector('.profile-address__save'),

  profileCards: document?.querySelector('.profile-cards'),
  profileCardsAdd: document?.querySelector('.profile-cards-add'),
  profileCardsAddBtn: document?.querySelector('.profile-cards__add'),
  profileCardsSaveBtn: document?.querySelector('.profile-cards__save'),

  profileOrders: document?.querySelector('.profile-orders'),
  profileOrdersAdd: document?.querySelector('.profile-order'),
  profileOrdersAddBtn: document?.querySelectorAll('.profile-orders__card-more'),
  profileOrdersSaveBtn: document?.querySelector('.profile-order__close'),

  //radio
  orderingDelMethod: document?.querySelectorAll('.ordering__delivery-method'),

  //promocode
  promocodeInput: document?.querySelector('.promocode-input'),
  promocodeBtn: document?.querySelector('.promocode-btn'),

  //modals
  ordSucFullModal: document?.querySelector('.ordering-s-modal'),
  ordSucFullModalClose: document?.querySelector('.ordering-s-modal__close'),

  cartSucFullModal: document?.querySelector('.cart-s-modal'),
  cartSucFullModalClose: document?.querySelector('.cart-s-modal__close'),

  cancelOrderModal: document?.querySelector('.cancel-order-modal'),
  cancelOrderModalClose: document?.querySelector('.cancel-order-modal__close'),
  cancelOrderModalYes: document?.querySelector('.cancel-order-modal__yes'),
  cancelOrderModalNo: document?.querySelector('.cancel-order-modal__no'),
  cancelOrderModalOpen: document?.querySelectorAll('.profile-order__cancel'),

  restorePassModal: document?.querySelector('.restore-pass'),
  restorePassModalClose: document?.querySelector('.restore-pass__close'),
  restorePassModalBtn: document?.querySelector('.restore-pass__btn'),

  signEnterCodeModalClose: document?.querySelector('.sign-modal__enter-code__close'),
  signEnterCodeModal: document?.querySelector('.sign-modal__enter-code'),
  signEnterCodeModalNext: document?.querySelector('.sign-modal__enter-code__btn'),

  restoreEnterCodeModalClose: document?.querySelector('.restore-pass__enter-code__close'),
  restoreEnterCodeModal: document?.querySelector('.restore-pass__enter-code'),
  restoreEnterCodeModalNext: document?.querySelector('.restore-pass__enter-code__btn'),

  newPassModalClose: document?.querySelector('.new-pass__close'),
  newPassModal: document?.querySelector('.new-pass'),

  signModalClose: document?.querySelector('.sign-modal__close'),
  signModal: document?.querySelector('.sign-modal'),
  signModalOpen: document?.querySelector('.header__log'),
  signNext: document?.querySelector('.sign-modal__btn'),

  sfModalClose: document?.querySelector('.sf-reg__close'),
  sfModal: document?.querySelector('.sf-reg'),


  categoriesOpen: document?.querySelector('.categories-btn'),
  categoriesModal: document?.querySelector('.categories-modal'),
  categoriesClose: document?.querySelector('.categories-modal__close'),
  categoriesAct: document?.querySelector('.categories-modal__activate-btn'),

  settingsOpen: document?.querySelector('.settings-btn'),
  settingsModal: document?.querySelector('.settings-modal'),
  settingsClose: document?.querySelector('.settings-modal__close'),
  settingsAct: document?.querySelector('.settings-modal__activate-btn'),

  typeOpen: document?.querySelector('#type'),
  typeModal: document?.querySelector('.type-modal'),
  typeClose: document?.querySelector('.type-modal__close'),
  typeAct: document?.querySelector('.type-modal__activate-btn'),

  langOuter: document?.querySelector('.header__lang-outer'),
  langBtn: document?.querySelector('.header__lang-btn'),
  langList: document?.querySelector('.header__lang-list'),

  currencyOuter: document?.querySelector('.header__currency-outer'),
  currencyBtn: document?.querySelector('.header__currency-btn'),
  currencyList: document?.querySelector('.header__currency-list'),
};
