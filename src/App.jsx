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
import NotFound from './pages/NotFound';
import DonarList from './pages/DonarList';
import Admin from './pages/Admin';
import AdminDashboard from './components/admin/admin-components/AdminDasboard';
import Inbox from './components/admin/admin-components/Inbox';
import Accounts from './components/admin/admin-components/Accounts';
import EventController from './components/admin/admin-components/EventController';
import InfoController from './components/admin/admin-components/InfoController';
import Donation from './components/admin/admin-components/Donation';
import CommitteeController from './components/admin/admin-components/CommitteeController';
import AdminSetting from './components/admin/admin-components/AdminSetting';
import BlogController from './components/admin/admin-components/BlogController';
import AdminLogout from './components/admin/admin-components/AdminLogout';

function App() {
  return (
    <>
      <Routes>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
