import Customization from '../../assets/customization.png';
import Events from '../../assets/events.png';
import Flights from '../../assets/flights.png';
import Weather from '../../assets/weather.png';
import './Category.scss';

const Category = () => {
  return (
    <section className="category">
      <div className="container">
        <h2 className="category__title">We Offer Best Services</h2>
        <div className="services">
          <div className="service">
            <img src={Weather} alt="Calculated Weather" />
            <h3>Calculated Weather</h3>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
          <div className="service">
            <img src={Flights} alt="Best Flights" />
            <h3>Best Flights</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="service">
            <img src={Events} alt="Local Events" />
            <h3>Local Events</h3>
            <p>Barton vanity itself do in it. Preferred to men it engrossed listening.</p>
          </div>
          <div className="service">
            <img src={Customization} alt="Customization" />
            <h3>Customization</h3>
            <p>We deliver outsourced aviation services for military customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
