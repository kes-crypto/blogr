const headerTabs = document.getElementsByClassName("header__tab");
const headerDropdownMenus = document.getElementsByClassName("header__dropdown");
const headerDropdownArrows =
  document.getElementsByClassName("header__tab-arrow");

const hideAllDropdownMenus = () => {
  for (let i = 0; i < headerDropdownMenus.length; i++) {
    let dropdownMenu = headerDropdownMenus[i];
    let dropdownArrow = headerDropdownArrows[i];
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  }
};

const hideOtherDropdownMenus = (idxToIgnore) => {
  for (let i = 0; i < headerDropdownMenus.length; i++) {
    if (i === idxToIgnore) continue;
    let dropdownMenu = headerDropdownMenus[i];
    let dropdownArrow = headerDropdownArrows[i];
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  }
};

const toggleHeaderDropdownMenu = (idx) => {
  const dropdownMenu = headerDropdownMenus[idx];
  const dropdownArrow = headerDropdownArrows[idx];
  const isDropdownMenuOpen = dropdownMenu.classList.contains("show");

  if (isDropdownMenuOpen) {
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("show");
  } else {
    dropdownMenu.classList.add("show");
    dropdownArrow.classList.add("show");
  }
};

const addHeaderNavDesktopEvents = () => {
  window.addEventListener("resize", () => {
    hideAllDropdownMenus();
  });

  for (let i = 0; i < headerTabs.length; i++) {
    let headerTab = headerTabs[i];

    headerTab.addEventListener("click", () => {
      hideOtherDropdownMenus(i);
      toggleHeaderDropdownMenu(i);
    });
  }
};

export default addHeaderNavDesktopEvents;
