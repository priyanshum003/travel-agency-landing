import './Subscription.scss';

const Subscription = () => {
  return (
    <section className="subscription">
      <div className="container">
        <div className="content">
          <h2>Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
          <form className="subscription-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="icon">
          <i className="fas fa-paper-plane"></i>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
