const Footer = () => {
const hour = new Date().getHours()
const openHour = 8;
const closeHour = 17;
console.log(hour)
const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We from open 8:00:00 AM - 5:00:00 PM </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>We are currently close come back between 8:00:00 AM - 5:00:00 PM  tomorrow</p>
      )}
    </footer>
  );
};
export default Footer;
