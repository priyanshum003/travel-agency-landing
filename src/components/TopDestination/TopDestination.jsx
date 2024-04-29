import './TopDestinations.scss';
import { IoNavigate } from "react-icons/io5";

const destinations = [
  {
    id: 1,
    city: 'Rome, Italy',
    price: '$5,42k',
    duration: '10 Days Trip',
    image: 'https://imgc.artprintimages.com/img/print/jane-sweeney-italy-lazio-rome-the-colosseum_u-l-pxtb3x0.jpg?background=F3F3F3'
  },
  {
    id: 2,
    city: 'London, UK',
    price: '$4,2k',
    duration: '12 Days Trip',
    image: 'https://i.pinimg.com/736x/e5/bf/94/e5bf9479419b85615b87042434aca3f3.jpg'
  },
  {
    id: 3,
    city: 'Full Europe',
    price: '$15k',
    duration: '28 Days Trip',
    image: 'https://cdn.pixabay.com/photo/2020/08/26/16/15/taj-mahal-5519945_640.jpg'
  },
];

const TopDestinations = () => {
  return (
    <section className="top-destinations">
      <div className="container">
        <h2 className="sub__title">Top Destinations</h2>
        <div className="cards">
          {destinations.map(destination => (
            <div key={destination.id} className="card">
              <div className="card-image">
                <img src={destination.image} alt={destination.city} />
              </div>
              <div className="card-content">
                <div className="destination">
                  <span>{destination.city}</span>
                  <span className="price">{destination.price}</span>
                </div>
                <div className="line"></div>
                <div className="duration">
                  <IoNavigate className="icon" />
                  <p className="duration-text">{destination.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
