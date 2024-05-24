import HomePageCountSection from "./Home-Page-Count-Section";
import HomepageCamping from "./Homepage-Camping";
import HomepageIntro from "./Homepage-Intro";
import HomepageJoinUs from "./Homepage-Join-Us";


const HomePage = () => {
    return (
        <>
         <HomepageIntro/>   
         <HomePageCountSection/>
         <HomepageCamping/>
         <HomepageJoinUs/>
        </>
    );
};

export default HomePage;