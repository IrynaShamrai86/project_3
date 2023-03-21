import { Outlet } from "react-router-dom";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import "../../dist/css/layout.css";
import {useEffect} from "react";
import WOW from "wowjs";

const Layout = () => {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

  return (
    <div>
      <Header />
      <main>
        <div className="main-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
    )
};

export default Layout;