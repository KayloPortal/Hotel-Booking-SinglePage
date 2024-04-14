/* eslint-disable react/prop-types */
import "./Map.css";
import { Map, Marker } from "pigeon-maps";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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

  return (
    <div className="map-container" style={{ height: "100%", width: "100%" }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {hotels.map((hotel) => (
          <Marker
            key={hotel.id}
            width={50}
            anchor={hotel["id-geo"].split(",").map((item) => Number(item))}
            onClick={() => console.log(hotel.id)}
            style={{pointerEvents:'auto'}}
          >
            <HotelMarker hotel={hotel} />
          </Marker>
        ))}
      </Map>
    </div>
  );
}

function HotelMarker({ hotel }) {

  const markerE = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".marker-content, .marker > .marker-trigonometry",
        { y: hotel.selected ? 40 : 0, scale: hotel.selected ? 0.8 : 1 },
        {
          opacity: hotel.selected ? 1 : 0,
          duration: 0.25,
          skewX: 0,
          scale: hotel.selected ? 1 : 0.8,
          y: hotel.selected ? 0 : 40,
        }
      );
    },
    { scope: markerE, dependencies: [hotel] }
  );

  return (
    <div className={`marker`} ref={markerE} onClick={() => console.log("H")}>
      <div className="marker-content | round-200">
        <div className="marker-content-container | round-200">
          <img
            className="marker-content__image | round-200"
            src={hotel.image}
            alt=""
          />
          <p className="marker-content__price | fs-300 fl-height-200 fw-extrabold">
            $
            {(function () {
              const s = hotel.price.toString();
              let outString = "";
              for (let i = s.length - 1; i >= 0; i--) {
                outString = s[i] + outString;
                if (i % 3 == 0 && i !== 0) outString = "," + outString;
              }
              return outString;
            })()}
          </p>
          <p className="marker-content__details | fs-100">
            {hotel.bedroom} Beds | {hotel.bathroom} Baths
          </p>
        </div>
      </div>
      <div className="marker-trigonometry"></div>
      <button className="marker-preview"
      onClick={() => console.log("DSD")}>
        <div className="marker-preview__heading | fs-100 fl-height-100 fw-extrabold">
          <p>
            {(function () {
              const s = hotel.price.toString();
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
