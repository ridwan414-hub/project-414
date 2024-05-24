/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { Toaster } from 'react-hot-toast';

const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="author"
          content={author}
        />
        <title>{title}</title>
      </Helmet>
      <Header />
      <section className="flex justify-center">
        <main className=" w-full"
          style={{
            minHeight: "70vh",
          }}
        >
          {children}
        </main>
      </section>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  children: "Default children",
  title: "Voice of Muslims",
  description: "We all are Muslims and we are proud of it.",
  keywords: "Donation Blog Muslim Remitance Halal Help Charity Zakat Sadqah",
  author: "VOM Team",
};

export default Layout;
