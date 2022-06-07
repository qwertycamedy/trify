import _vars from '../_vars';

function footerAccordions(accordions) {
  accordions.forEach((function (t) {
    t.addEventListener("click", (function (t) {
      var c = t.currentTarget,
        e = document.querySelectorAll(".footer__menu"),
        l = c.querySelector(".footer__menu");
      accordions.forEach((function (t) {
        t != c && t.classList.remove("active")
      })), e.forEach((function (t) {
        t.style.maxHeight = null
      })), c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = l.scrollHeight + "px" : l.style.maxHeight = null
    }))
  }));
}

function catalogAccordions(accordions) {
  accordions.forEach((function (t) {
    t.addEventListener("click", (function (t) {
      var c = t.currentTarget,
        e = document.querySelectorAll(".catalog__acc-list"),
        l = c.querySelector(".catalog__acc-list");

        if(document.querySelector('.settings-modal')) {
          accordions.forEach((function (t) {
          t != c && t.classList.remove("active")
        })), e.forEach((function (t) {
          t.style.maxHeight = null
        })), c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = "130px" : l.style.maxHeight = null
        } else {
          accordions.forEach((function (t) {
          t != c && t.classList.remove("active")
        })), e.forEach((function (t) {
          t.style.maxHeight = null
        })), c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = l.scrollHeight + "px" : l.style.maxHeight = null
      }

    }))
  }));
}

function faqAccordions(accordions) {
  accordions.forEach((function (t) {
    t.addEventListener("click", (function (t) {
      var c = t.currentTarget,
        e = document.querySelectorAll(".faq__list-text"),
        l = c.querySelector(".faq__list-text");
      accordions.forEach((function (t) {
        t != c && t.classList.remove("active")
      })), e.forEach((function (t) {
        t.style.maxHeight = null
      })), c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = l.scrollHeight + "px" : l.style.maxHeight = null
    }))
  }));
}

if (document.querySelector('.filter')) {
  function filterAccordions(buttons) {
    buttons.forEach((function (btn) {
      let currentContentId = btn.getAttribute('data-filter');
      let currentContent = document.querySelector(currentContentId);
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        currentContent.classList.toggle('active');
        btn.classList.contains("active") ? currentContent.style.maxHeight = "max-content" : currentContent.style.maxHeight = null;
      });
    }));

    document.querySelector('.categories__open').click();
  }

  filterAccordions(_vars.filterAccBtn);
}

function categoriesAccordions(accordions) {
  accordions.forEach((function (t) {
    t.addEventListener("click", (function (t) {
      var c = t.currentTarget,
        e = document.querySelectorAll(".categories__sublist"),
        l = c.querySelector(".categories__sublist");
      accordions.forEach((function (t) {
        t != c && t.classList.remove("active")
      })), e.forEach((function (t) {
        t.style.maxHeight = null
      })), c.classList.toggle("active"), c.classList.contains("active") ? l.style.maxHeight = l.scrollHeight + "px" : l.style.maxHeight = null
    }))
  }));
}



footerAccordions(_vars.footerAcc);
catalogAccordions(_vars.catalogAcc);
faqAccordions(_vars.faqAcc);
categoriesAccordions(_vars.filterAcc);
