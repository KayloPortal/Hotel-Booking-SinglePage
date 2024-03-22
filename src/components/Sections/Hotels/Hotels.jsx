/* eslint-disable react/prop-types */
import "./Hotels.css";
import iconFilter from "/icon-filter.svg";
import iconApartment from "/icon-apartment.svg";
import iconWater from "/icon-smiling-water.svg";
import iconVilla from "/icon-villa.svg";
import iconStar from "/icon-star.svg";
import imageHotel1 from "/image-hotel-1.png";
import imageHotel2 from "/image-hotel-2.png";
import imageHotel3 from "/image-hotel-3.png";
import { useState } from "react";

const hotels = [
  {
    title: "Fully Furnished Smart Studio Apartment",
    rate: "4.8",
    author: "Mercedes Vito",
    guests: "2",
    bedroom: "1",
    bathroom: "2",
    "type": "Entire Studio Apartment",
    "id-geo": "",
    location: "Los Angeles",
    "free-cancellation": true,
    "instant-book": true,
    price: "720000",
    image: imageHotel1,
    id: "3272gdg28d2gdywtudSdaDSvsa33423",
  },
  {
    title: "Furnished Apartment",
    rate: "3.8",
    author: "Mercedes Vito",
    guests: "4",
    bedroom: "3",
    bathroom: "2",
    "type": "Entire home",
    "id-geo": "",
    location: "Los Angeles",
    "free-cancellation": false,
    "instant-book": true,
    price: "720000",
    image: imageHotel2,
    id: "3272gdg28d2gdywtudSdaDSvsa3ads3",
  },
  {
    title: "Clasic Studio Apartment",
    rate: "4.0",
    author: "Mercedes Vito",
    guests: "2",
    bedroom: "2",
    bathroom: "2",
    "type": "Share with Super Host",
    "id-geo": "",
    location: "Los Angeles",
    "free-cancellation": false,
    "instant-book": false,
    price: "720000",
    image: imageHotel3,
    id: "3272gdg28d2gdywtudSdaDdsba33423",
  },
];

const icons = {
  "Share with Super Host": iconWater,
  "Entire home": iconApartment,
  "Entire Studio Apartment": iconVilla
}

function Hotels() {
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
