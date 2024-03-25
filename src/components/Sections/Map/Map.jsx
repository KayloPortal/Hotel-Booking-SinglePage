import "./Map.css";
import { Map, Marker } from "pigeon-maps";

const MAPTILER_ACCESS_TOKEN = "h7gcwKw9qu9SMC1DDScK";
const MAP_ID = "bright";

function mapTiler(x, y, z, dpr) {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr >= 2 ? "@2x" : ""
  }.png?key=${MAPTILER_ACCESS_TOKEN}`;
}

function MapSection() {
  // const [mapCenter, setMapCenter] = useState([51.505, -0.09])
  const defaultProps = {
    center: [
      10.99835602,
      77.01502627
    ],
    zoom: 20,
  };

  return (
    <div className="map-container" style={{ height: "100%", width: "100%" }}>
      <Map
        provider={mapTiler}
        dprs={[1, 2]}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker width={50} anchor={defaultProps.center} />
      </Map>
    </div>
  );
}

export default MapSection;
