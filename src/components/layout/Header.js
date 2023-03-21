import MainMenu from '../navigation/MainMenu';
import Logo from './Logo';
import '../../dist/css/header.css';

let primaryMenu = {
  links: [
    {
      link: "Home",
      path: "/"
    },
    {
      link: "About us",
      path: "/about us"
    },
    {
      link: "Movies",
      path: "/movies"
    },
    {
      link: "Shop",
      path: "/shop"
    },
    {
      link: "Contacts",
      path: "/contacts"
    },
  ]
};
const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        < Logo />
        < MainMenu { ...primaryMenu }/>
      </div>
    </header>
  )
}

export default Header;
