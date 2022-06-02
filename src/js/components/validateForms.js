let validateForms = function (selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    messages: {
      restoreInput: 'Это поле обязательно для заполнения',
      enterCode: 'Это поле обязательно для заполнения',
      newPassOld: 'Это поле обязательно для заполнения',
      newPassNew: 'Это поле обязательно для заполнения',
      signInput: 'Это поле обязательно для заполнения',
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
  signInput: {
    required: true,
  },
  signCheckbox: {
    required: true,
  },
});
