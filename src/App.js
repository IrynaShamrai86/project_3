import { Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Contacts from './components/pages/Contacts';
import Shop from './components/pages/Shop';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Movies from './components/pages/Movies';
import Movie from './components/pages/Movie';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about us" element={<AboutUs />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:id" element={<Movie />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
