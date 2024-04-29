import './MainContent.scss';
import mainImage from '../../assets/main-image.png'; // Adjust the path as needed

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="text-content">
          <h2>BEST DESTINATIONS AROUND THE WORLD</h2>
          <h1>Travel, enjoy and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="buttons">
            <button className="find-out-more">Find out more</button>
            <button className="play-demo">Play Demo</button>
          </div>
        </div>
        <div className="image-content">
          <img src={mainImage} alt="Traveler" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
