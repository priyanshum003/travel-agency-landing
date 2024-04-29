import { BiSolidLeaf } from "react-icons/bi";
import { CiMap } from "react-icons/ci";
import { FaMapLocationDot, FaTaxi, FaBuilding } from "react-icons/fa6";
import { IoNavigate } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import './EasySteps.scss';

const steps = [
  {
    id: 1,
    title: 'Choose Destination',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Urna, tortor tempus.',
    icon: <FaMapLocationDot />,
    iconBg: 'purple',
  },
  {
    id: 2,
    title: 'Make Payment',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Urna, tortor tempus.',
    icon: <MdOutlinePayments />,
    iconBg: 'orange',
  },
  {
    id: 3,
    title: 'Reach Airport on Selected Date',
    description: 'Lorem ipsum dolor sit amet, conse adipiscing elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, conse adipiscing elit. Urna, tortor tempus.',
    icon: <FaTaxi />,
    iconBg: 'teal',
  },
];

const EasySteps = () => {
  return (
    <section className="easy-steps">
      <div className="container">
        <div className='easy-steps__title'>
          Easy Steps to Plan Your Trip
          <br />
          In 3 Easy Steps
        </div>
        <div className="easy-steps__content">

          <div className="content">
            <div className="steps">
              {steps.map(step => (
                <div key={step.id} className="step">
                  <div className="icon" style={{ backgroundColor: step.iconBg }}>
                    {step.icon}
                  </div>
                  <div className="step-details">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="trip-info">
            <div className="trip-card">
              <img src="https://static.toiimg.com/photo/msid-89717657,width-96,height-65.cms" alt="Trip to Greece" />
              <div className="trip-details">
                <h4>Trip To Greece</h4>
                <p>14-29 June | by Robbin joe</p>
                <div className="icons">
                  <BiSolidLeaf />
                  <CiMap />
                  <IoNavigate />
                </div>
                <p className="people-going">
                  <span>
                    <FaBuilding /> &nbsp;
                    24 people going
                  </span>
                  <span className="heart-icon">
                    <CiHeart />
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EasySteps;
