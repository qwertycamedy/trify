import _vars from '../_vars';

function headerCatalogOpen(outers) {
  outers.forEach(outer => {
    outer.addEventListener("mouseover", function () {
      let currentBtn = outer;

      if (!currentBtn.classList.contains('active')) {
        _vars.catalogBtns.forEach(function (item) {
          item.classList.remove('active');
        });

        _vars.headerCatalogModals.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
      }
    });

    outer.addEventListener('mouseleave', function() {
      outers.forEach(outer => {
        outer.classList.remove('active')
      });
    })
  });
}


headerCatalogOpen(_vars.headerCatalog);

if (document.querySelector('.profile__tab')) {
  function profileTabs(btns, contents, profileMain) {
    btns.forEach(link => {
      if (link.href == document.URL) {
        link.classList.add('active');
        profileMain.classList.add('active');
      }
    });
  }

  profileTabs(_vars.profileTabBtns, _vars.profileTabContents, _vars.profileMainBtn);
}

if (document.querySelector('.seller-tab__list')) {
  function sellerTab(sellerTabLinks) {
    sellerTabLinks.forEach(link => {
      if (link.href == document.URL) {
        link.classList.add('active');
      }

      if (document.querySelector('.all-selected') || document.querySelector('.all-search')) {
        document.querySelector('#sellerProduct').classList.add('active');
      }
    });
  }

  sellerTab(_vars.sellerTabLinks);
}

if (document.querySelector('.product-tab')) {
  _vars.productTabBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-product-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        _vars.productTabBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        _vars.productTabContent.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }

  document.querySelector('.product-tab__btn').click();
}

if (document.querySelector('.product-tab__review')) {
  _vars.productTabReviewBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-review");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
        _vars.productTabReviewBtn.forEach(function (item) {
          item.classList.remove('active');
        });

        _vars.productTabReviewContent.forEach(function (item) {
          item.classList.remove('active');
        });

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
      }
    });
  }

  document.querySelector('.product-tab__review-btn').click();
}
