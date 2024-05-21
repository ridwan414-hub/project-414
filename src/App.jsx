import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Committee from './pages/Committee';
import ProvincialCommittee from './pages/ProvincialCommittee';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Members from './pages/Members';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Donate from './pages/Donate';
import Join from './pages/Join';
import Login from './pages/Login';
// import NotFound from './pages/NotFound';
import DonarList from './pages/DonarList';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/provincial-committee" element={<ProvincialCommittee />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/donar-list" element={<DonarList />} />
        <Route path="/members" element={<Members />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
