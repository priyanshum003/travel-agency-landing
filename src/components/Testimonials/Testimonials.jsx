import { useState, useEffect } from 'react';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    name: 'Mike Taylor',
    location: 'Lahore, Pakistan',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
  },
  {
    id: 2,
    name: 'Chris Thomas',
    location: 'CEO of Red Button',
    image: 'https://randomuser.me/api/portraits/men/33.jpg',
    review: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.”',
  },
  {
    id: 3,
    name: 'Sarah Connor',
    location: 'San Francisco, USA',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: '“Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.”',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => (current + 1) % testimonials.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>What People Say About Us.</h2>
        </div>
        <div className="testimonial">
          <div className="testimonial-content" key={testimonials[current].id}>
            <img src={testimonials[current].image} alt={testimonials[current].name} />
            <p>{testimonials[current].review}</p>
            <h4>{testimonials[current].name}</h4>
            <span>{testimonials[current].location}</span>
          </div>
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={current === index ? 'active' : ''}
                onClick={() => setCurrent(index)}
              >
                &#8226;
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;