const headerMobileHamburgerButton = document.getElementsByClassName(
  "header__hamburger-button"
)[0];
const headerMobileCloseButton = document.getElementsByClassName(
  "header__close-button"
)[0];
const headerMobileMenu = document.getElementsByClassName(
  "header__mobile-menu"
)[0];
const headerMobileTabs = document.getElementsByClassName("header__mobile-tab");
const headerMobileTabTexts = document.getElementsByClassName(
  "header__mobile-tab-text"
);
const headerMobileArrows = document.getElementsByClassName(
  "header__mobile-arrow"
);
const headerMobileSubMenus = document.getElementsByClassName(
  "header__mobile-submenu"
);

const hideAllMobileSubMenus = () => {
  for (let i = 0; i < headerMobileTabs.length; i++) {
    let headerMobileTabText = headerMobileTabTexts[i];
    let headerMobileArrow = headerMobileArrows[i];
    let headerMobileSubMenu = headerMobileSubMenus[i];

    headerMobileTabText.classList.remove("show");
    headerMobileArrow.classList.remove("show");
    headerMobileSubMenu.classList.remove("show");
  }
};

const hideOtherMobileSubMenus = (idxToIgnore) => {
  for (let i = 0; i < headerMobileTabs.length; i++) {
    if (i === idxToIgnore) continue;
    let headerMobileTabText = headerMobileTabTexts[i];
    let headerMobileArrow = headerMobileArrows[i];
    let headerMobileSubMenu = headerMobileSubMenus[i];

    headerMobileTabText.classList.remove("show");
    headerMobileArrow.classList.remove("show");
    headerMobileSubMenu.classList.remove("show");
  }
};

const toggleHeaderMobileSubMenu = (idx) => {
  let headerMobileTabText = headerMobileTabTexts[idx];
  let headerMobileArrow = headerMobileArrows[idx];
  let headerMobileSubMenu = headerMobileSubMenus[idx];
  const isSubMenuOpen = headerMobileTabText.classList.contains("show");

  if (isSubMenuOpen) {
    headerMobileTabText.classList.remove("show");
    headerMobileArrow.classList.remove("show");
    headerMobileSubMenu.classList.remove("show");
  } else {
    headerMobileTabText.classList.add("show");
    headerMobileArrow.classList.add("show");
    headerMobileSubMenu.classList.add("show");
  }
};

const toggleHeaderMobileMenu = () => {
  const isMobileMenuOpen = headerMobileMenu.classList.contains("show");

  if (isMobileMenuOpen) {
    headerMobileHamburgerButton.classList.remove("hide");
    headerMobileCloseButton.classList.remove("show");
    headerMobileMenu.classList.remove("show");
  } else {
    headerMobileHamburgerButton.classList.add("hide");
    headerMobileCloseButton.classList.add("show");
    headerMobileMenu.classList.add("show");
  }
};

const addHeaderMobileMenuEvents = () => {
  window.addEventListener("resize", () => {
    const isMobileMenuOpen = headerMobileMenu.classList.contains("show");
    if (isMobileMenuOpen) {
      hideAllMobileSubMenus();
      toggleHeaderMobileMenu();
    }
  });

  for (let i = 0; i < headerMobileTabs.length; i++) {
    let headerMobileTab = headerMobileTabs[i];
    headerMobileTab.addEventListener("click", () => {
      hideOtherMobileSubMenus(i);
      toggleHeaderMobileSubMenu(i);
    });
  }

  headerMobileHamburgerButton.addEventListener("click", toggleHeaderMobileMenu);

  headerMobileCloseButton.addEventListener("click", toggleHeaderMobileMenu);
};

export default addHeaderMobileMenuEvents;
