import "./Hotels.css";
import iconFilter from "/icon-filter.svg";
import iconApartment from "/icon-apartment.svg";
import iconWater from "/icon-smiling-water.svg";
import iconVilla from "/icon-villa.svg";
import iconStar from "/icon-star.svg";
import imageHotel1 from "/image-hotel-1.png";
import { useState } from "react";

function Hotels() {
  return (
    <section className="hotels | fl-height-200">
      <p className="hotels__subheading">430 + Stays</p>
      <h2 className="hotels__heading | fs-500 fw-extrabold">
        Stays in Los Angeles
      </h2>
      <HotelsTags />
      <ul className="hotels-list">
        <li className="hotel">
          <div className="hotel-image">
            <img
              className="hotel__image | round-400"
              src={imageHotel1}
              alt=""
            />
          </div>
          <div className="hotels-texts | fl-height-100 fs-200">
            <h3 className="hotel__heading | fw-extrabold fs-400">
              Fully Furnished Smart Studio Apartment
            </h3>
            <div>
              <img className="hotel__rate-image" src={iconStar} alt="rate" />
              <span className="hotel__rate-number">4.8</span>
              <p className="hotel__owner">Mercedes Vito</p>
            </div>
            <p className="hotel__details">2 guests | 1 bedroom | 2 bathroom</p>
            <div>
              <img
                className="hotel__type-image"
                src={iconApartment}
                alt="apartment"
              />
              <p className="hotel__type-text">Entire Studio Apartment</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

function HotelsTags() {
  const [tags, setTags] = useState([
    { title: "Free cancellation", selection: false, id: "1" },
    { title: "Price", selection: false, id: "2" },
    { title: "Instant Book", selection: false, id: "3" },
  ]);

  function handleSelection(id) {
    setTags((prev) =>
      prev.map((tag) => (tag.id === id ? { ...tag, selection: !tag.selection } : tag))
    );
  }

  return (
    <div className="hotels-tags">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`hotels__tag ${
            tag.selection ? "hotels__tag--selected" : ""
          }`}
          onClick={() => handleSelection(tag.id)}
        >
          {tag.title}
        </button>
      ))}
      <img className="hotel__filter-icon" src={iconFilter} alt="" />
    </div>
  );
}

export default Hotels;
