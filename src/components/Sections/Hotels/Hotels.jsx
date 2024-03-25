/* eslint-disable react/prop-types */
import "./Hotels.css";
import iconFilter from "/icon-filter.svg";
import iconApartment from "/icon-apartment.svg";
import iconWater from "/icon-smiling-water.svg";
import iconVilla from "/icon-villa.svg";
import iconStar from "/icon-star.svg";
import { useState } from "react";

const icons = {
  "Share with Super Host": iconWater,
  "Entire home": iconApartment,
  "Entire Studio Apartment": iconVilla
}

function Hotels({hotels}) {
  return (
    <section className="hotels | fl-height-200">
      <p className="hotels__subheading">430 + Stays</p>
      <h2 className="hotels__heading | fs-500 fw-extrabold">
        Stays in Los Angeles
      </h2>
      <HotelsTags />
      <ul className="hotels-list">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="hotel | round-400">
            <Hotel data={hotel} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function Hotel({data}) {
  return (
    <>
      <div className="hotel-image">
        <img className="hotel__image | round-400" src={data.image} alt="" />
      </div>
      <div className="hotel-texts | fl-height-100 fs-200 fs-200-m">
        <h3 className="hotel__heading | fw-extrabold fs-400">
          {data.title}
        </h3>
        <div>
          <img className="hotel__rate-image" src={iconStar} alt="rate" />
          <span className="hotel__rate-number">{data.rate}</span>
          <p className="hotel__owner">{data.author}</p>
        </div>
        <p className="hotel__details">{data.guests} guests | {data.bedroom} bedroom | {data.bathroom} bathroom</p>
        <div>
          <img
            className="hotel__type-image"
            src={icons[data.type]}
            alt="apartment"
          />
          <p className="hotel__type-text">{data.type}</p>
        </div>
      </div>
    </>
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
      prev.map((tag) =>
        tag.id === id ? { ...tag, selection: !tag.selection } : tag
      )
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
