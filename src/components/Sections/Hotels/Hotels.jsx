import "./Hotels.css";
import iconFilter from "/icon-filter.svg"
import iconApartment from "/icon-apartment.svg"
import iconWater from "/icon-smiling-water.svg"
import iconVilla from "/icon-villa.svg"
import iconStar from "/icon-star.svg"
import imageHotel1 from "/image-hotel-1.png"

function Hotels() {
  return (
    <section className="hotels">
      <p className="hotels__subheading">430 + Stays</p>
      <h2 className="hotels__heading">Stays in Los Angeles</h2>
      <div className="hotels-tags">
        <span className="hotels__tag">Free cancellation</span>
        <span className="hotels__tag">Price</span>
        <span className="hotels__tag">Instant Book</span>
        <img className="hotel__filter-icon" src={iconFilter} alt="" />
      </div>
      <ul className="hotels-list">
        <li className="hotel">
          <div className="hotel-image">
            <img className="hotel__image" src={imageHotel1} alt="" />
          </div>
          <div className="hotels-texts">
            <h3 className="hotel__heading">
              Fully Furnished Smart Studio Apartment
            </h3>
            <div>
              <img className="hotel__rate-image" src={iconStar} alt="rate" />
              <span className="hotel__rate-number">4.8</span>
              <p className="hotel__owner">Mercedes Vito</p>
            </div>
            <p className="hotel__details">2 guests | 1 bedroom | 2 bathroom</p>
            <div>
              <img className="hotel__type-image" src={iconApartment} alt="apartment" />
              <p className="hotel__type-text">Entire Studio Apartment</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Hotels;
