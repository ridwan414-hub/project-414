import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { WebsiteInfoProvider } from './contexts/WebsiteInfo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WebsiteInfoProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </WebsiteInfoProvider>
);
