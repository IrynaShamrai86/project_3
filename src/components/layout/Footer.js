import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../../dist/css/footer.css';
import NavWithTitle from '../navigation/NavWithTitle';
import NavWithTitleAndImg from "../navigation/NavWithTitleAndImg";
import facebook from '../../dist/img/facebook.webp';
import twitter from '../../dist/img/twitter.webp';
import youtube from '../../dist/img/youtube.webp';
import instagram from '../../dist/img/instagram.webp';

const currentYear = new Date().getFullYear();

let primaryNav = {
  title:  "ADDITIONAL LINKS",
  links: [
    { id: "link-1",
      link: "Home",
      path: "/"
    },
    {
      id: "link-2",
      link: "About us",
      path: "/AboutUs"
    },
    {
      id: "link-3",
      link: "Movies",
      path: "/Movies"
    },
    {
      id: "link-4",
      link: "Shop",
      path: "/Shop"
    },
    {
      id: "link-5",
      link: "Contacts",
      path: "/Contacts"
    },
    {
      id: "link-6",
      link: "FAQ",
      path: "/faq"
    },
    {
      id: "link-7",
      link: "Privacy & Policy",
      path: "/privacy-and-policy"
    },
  ]
};

let moviesNav = {
  title:  "MOVIES",
  links: [
    {
      id: "movies-1",
      link: "New Films",
      path: "/movies"
    },
    {
      id: "movies-2",
      link: "Coming Soon",
      path: "/movies"
    },
    {
      id: "movies-3",
      link: "Most Popular",
      path: "/movies"
    },
    {
      id: "movies-4",
      link: "Top Trailers",
      path: "/movies"
    },
  ]
};
let socialNavImg = {
  title:  "FOLLOW US",
  links: [
    {
      img: {
        name: youtube,
        alt: "img",
      },
      link: "YouTube",
      path: "https://www.youtube.com"
    },
    {
      img: {
        name: instagram,
        alt: "img",
      },
      link: "Instagram",
      path: "https://www.instagram.com"
    },
    {
      img: {
        name: twitter,
        alt: "img",
      },
      link: "Twitter",
      path: "https://twitter.com"
    },
    {
      img: {
        name: facebook,
        alt: "img",
      },
      link: "FaceBook",
      path: "https://www.facebook.com"
    },
  ]
};

const Footer = () => {
  return (
      <footer>
        <div className="content container">
          <div className="text-area">
            < Logo />
            <p>

            </p>
          </div>
          <NavWithTitle { ...primaryNav } />
          <NavWithTitle { ...moviesNav } />
          <NavWithTitleAndImg { ...socialNavImg } />
        </div>
        <div className="copyright">
          <p className="container-copyright">
            Copyright © { currentYear } <Link className="owner" to="/">Muvimox.</Link> All Rights Reserved. Powered by <Link className="developer" to="/">MoxCreative.</Link>
          </p>
        </div>
      </footer>
  )
}

export default Footer;
