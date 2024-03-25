/* eslint-disable react/prop-types */
import "./Map.css";
import { Map, Marker } from "pigeon-maps";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

const MAPTILER_ACCESS_TOKEN = "h7gcwKw9qu9SMC1DDScK";
const MAP_ID = "bright";
function mapTiler(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${MAPTILER_ACCESS_TOKEN}`;
}

function MapSection({ hotels }) {
  // const [mapCenter, setMapCenter] = useState([51.505, -0.09])
  const defaultProps = {
    center: [34.05849001345665, -118.24410152128736],
    zoom: 13,
  };

  console.log(
    hotels.map((hotel) => (
      <Marker key={hotel.id} width={50} anchor={hotel["id-geo"].split(",")} />
    ))
  );

  return (
    <div className="map-container" style={{ height: "100%", width: "100%" }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <Marker width={50} anchor={defaultProps.center} /> */}
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            width={50}
            anchor={hotel["id-geo"].split(",").map((item) => Number(item))}
            // onClick={() => console.log("H")}
            onClick={() => console.log("H")} 
          >
            <MapMarker data={hotel} />
          </Marker>
        ))}
      </Map>
    </div>
  );
}

function MapMarker({ data }) {
  // const { contextSafe } = useGSAP();
  // const [ opens, setOpens ] = 

  return (
    <div className="marker">
      <div className="marker-content | round-200">
        <div className="marker-content-container | round-200">
          <img
            className="marker-content__image | round-200"
            src={data.image}
            alt=""
          />
          <p className="marker-content__price | fs-300 fl-height-200 fw-extrabold">
            $
            {(function () {
              const s = data.price.toString();
              let outString = "";
              for (let i = s.length - 1; i >= 0; i--) {
                outString = s[i] + outString;
                if (i % 3 == 0 && i !== 0) outString = "," + outString;
              }
              return outString;
            })()}
          </p>
          <p className="marker-content__details | fs-100">
            {data.bedroom} Beds | {data.bathroom} Baths
          </p>
        </div>
      </div>
      <div className="marker-trigonometry"></div>
      <button className="marker-preview">
        <div className="marker-preview__heading | fs-100 fl-height-100 fw-extrabold">
          <p>
            {(function () {
              const s = data.price.toString();
              return s.substring(0, s.length - 3);
            })()}
            K
          </p>
        </div>
        <div className="marker-trigonometry"></div>
      </button>
    </div>
  );
}

export default MapSection;
