import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Join from './pages/Join';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import DonarList from './pages/DonarList';
import Admin from './pages/Admin';
import AdminDashboard from './components/AdminPage/AdminDasboard';
import Inbox from './components/AdminPage/Inbox';
import Accounts from './components/AdminPage/Accounts';
import EventController from './components/AdminPage/EventController';
import InfoController from './components/AdminPage/InfoController';
import Donation from './components/AdminPage/Donation';
import CommitteeController from './components/AdminPage/CommitteeController';
import AdminSetting from './components/AdminPage/AdminSetting';
import BlogController from './components/AdminPage/BlogController';
import AdminLogout from './components/AdminPage/AdminLogout';
import AdvisoryCouncil from './pages/CommitteePages/AdvisoryCouncil';
import BoardOfDirectors from './pages/CommitteePages/BoardOfDirectors';
import EntrepreneurCouncil from './pages/CommitteePages/EntrepreneurCouncil';
import PatronageCouncil from './pages/CommitteePages/PatronageCouncil';
import RepresentativeCouncil from './pages/CommitteePages/RepresentativeCouncil';
import Events from './pages/Events';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
      <Routes>
        {/* admin routes */}
        <Route path="/admin" element={<Admin />}>
          <Route path="Dashboard" element={<AdminDashboard />} />
          <Route path="Inbox" element={<Inbox />} />
          <Route path="Accounts" element={<Accounts />} />
          <Route path="Control-Events" element={<EventController />} />
          <Route path="Manage-Info" element={<InfoController />} />
          <Route path="Donation" element={<Donation />} />
          <Route path="Committee" element={<CommitteeController />} />
          <Route path="Setting" element={<AdminSetting />} />
          <Route path="Blog" element={<BlogController />} />
          <Route path="Logout" element={<AdminLogout />} />
        </Route>
        {/* committee routes */}
        <Route path='/advisory-council' element={<AdvisoryCouncil />} />
        <Route path='/board-of-directors' element={<BoardOfDirectors />} />
        <Route path='/entrepreneur-council' element={<EntrepreneurCouncil />} />
        <Route path='/patronage-council' element={<PatronageCouncil />} />
        <Route path='/representative-council' element={<RepresentativeCouncil />} />
        {/* normal routes */}
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path="/donar-list" element={<DonarList />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
