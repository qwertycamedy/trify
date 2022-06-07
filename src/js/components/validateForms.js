let validateForms = function (selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      restoreInput: 'Это поле обязательно для заполнения',
      enterCode: 'Это поле обязательно для заполнения',
      newPassOld: 'Это поле обязательно для заполнения',
      newPassNew: 'Это поле обязательно для заполнения',
      signInputOne: 'Это поле обязательно для заполнения',
      signInputTwo: 'Это поле обязательно для заполнения',
      signInputThr: 'Это поле обязательно для заполнения',
      signInputFour: 'Это поле обязательно для заполнения',
      signInputFive: 'Это поле обязательно для заполнения',
      signInputSix: 'Это поле обязательно для заполнения',
      enterCode: 'Это поле обязательно для заполнения',
    },
  });
};
validateForms('.restore-pass__form', {
  restoreInput: {
    required: true,
  },
  restoreCheck: {
    required: true,
  },
});
validateForms('.restore-pass__enter-code__form', {
  restoreEnterCode: {
    required: true,
  },
});
validateForms('.sign-modal__enter-code__form', {
  signEnterCode: {
    required: true,
  },
});
validateForms('.new-pass__form', {
  newPassNew: {
    required: true,
  },
  newPassOld: {
    required: true,
  },
});
validateForms('.sign-modal__form', {
  signInputOne: {
    required: true,
  },
  signInputTwo: {
    required: true,
  },
});
validateForms('.reg-form', {
  signInputThr: {
    required: true,
  },
  signInputFour: {
    required: true,
  },
  signInputFive: {
    required: true,
  },
  signInputSix: {
    required: true,
  },
});
 