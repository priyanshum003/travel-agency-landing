import "./app.scss";
import Category from './components/category/Category';
import EasySteps from './components/EasySteps/EasySteps';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';
import Testimonials from './components/Testimonials/Testimonials';
import TopDestinations from './components/TopDestination/TopDestination';

const App = () => {
  return (
    <div className="App">
      {/* <div className="page-container"> */}
        <Header />
        <MainContent />
      {/* </div> */}
      <Category />
      <TopDestinations />
      <EasySteps />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
