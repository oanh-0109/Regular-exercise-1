const MENU_ITEMS = document.querySelectorAll('.header__menu--item');Add commentMore actions
const PAGES = document.querySelectorAll('.page');
MENU_ITEMS.forEach((item, index) => {
    item.addEventListener('click', () => {
        PAGES.forEach((child) => {Add commentMore actions
      child.classList.remove('show');
      child.classList.add('hide');
    });
    PAGES[index].classList.add('show');Add commentMore actions
    PAGES[index].classList.remove('hide');
  });
});