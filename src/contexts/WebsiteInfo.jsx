/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
const WebsiteInfoContext = createContext();

const WebsiteInfoProvider = ({ children }) => {
  const [Info, setInfo] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_URL}/website_function/`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data[0]);
      });
  }, []);
  return (
    <WebsiteInfoContext.Provider value={[Info, setInfo]}>
      {children}
    </WebsiteInfoContext.Provider>
  );
};

const useWebsiteInfo = () => useContext(WebsiteInfoContext);

export { WebsiteInfoProvider, useWebsiteInfo };
