import TopHeader from "./components/Shared/Header/TopHeader.jsx";
import Header from "./components/Shared/Header/Header.jsx";
import Home from "./page/Home.jsx";
import Footer from "./components/Shared/Footer.jsx";

const App = () => {
    return (
        <div>
            <TopHeader/>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default App;