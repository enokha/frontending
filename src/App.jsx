import { Routes, Route } from 'react-router-dom';

// Components
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

// Styles
import './App.css';
import './styles/main-home.css';

// Pages
import MainHome from './pages/MainHome';
import AboutPage from './pages/AboutPage';
import ApartmentDetails from './pages/ApartmentDetails';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
        <>
            <SiteHeader />
            <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/apartment/:id" element={<ApartmentDetails />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <SiteFooter />
        </>
    );
};

export default App;
