export default function Header(element:Document) {
    const Header = element.querySelector(".header");
    const ButtonMenu = element.querySelector(".header__menu");
    const ButtonSearch = element.querySelector(".header__navigation__buttons__button__search");
    const HeaderNavigation = element.querySelector(".header__navigation");
    const HeaderSearch = element.querySelector(".header__navigation__search");

    if(Header) {
        window.addEventListener("scroll", () => {
            if(window.scrollY > Header.scrollTop) {
                return Header.classList.add("header--scrolled");
            }
            Header.classList.remove("header--scrolled");
        })
    }

    if(ButtonMenu && HeaderNavigation) {
        ButtonMenu.addEventListener("click", () => {
            HeaderNavigation.classList.toggle("header__navigation--active")
        })
    }        
    
    if(ButtonSearch && HeaderSearch) {
        ButtonSearch.addEventListener("click", () => {
            HeaderSearch.classList.toggle("header__navigation__search--active");
            ButtonSearch.classList.toggle("header__navigation__buttons__button__search--active");
        })
    }
}
