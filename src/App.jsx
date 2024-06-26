import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Sections/Header/Header";
import Hotels from "./components/Sections/Hotels/Hotels";
import MapSection from "./components/Sections/Map/Map";
import imageHotel1 from "/image-hotel-1.png";
import imageHotel2 from "/image-hotel-2.png";
import imageHotel3 from "/image-hotel-3.png";
import { useURLContext } from "./contexts/URL";
import axios from "axios";

function App() {
  const [hotels, setHotels] = useState(
    [
      {
        title: "Fully Furnished Smart Studio Apartment",
        rate: "4.8",
        author: "Mercedes Vito",
        guests: "2",
        bedroom: "1",
        bathroom: "2",
        type: "Entire Studio Apartment",
        "id-geo": "34.0539171228829,-118.25578667187575",
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
        type: "Entire home",
        "id-geo": "34.04841557015306, -118.24192912658604",
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
        type: "Share with Super Host",
        "id-geo": "34.050080816708686, -118.27744897769688",
        location: "Los Angeles",
        "free-cancellation": false,
        "instant-book": false,
        price: "720000",
        image: imageHotel3,
        id: "3272gdg28d2gdywtudSdaDdsba33423",
      },
    ].map((item) => ({ ...item, selected: false }))
  );
  const URL = useURLContext();

  useEffect(() => {
    async function fetchData() {
      // let res = await fetch(URL + "data/conditioned-apartment", {
      //   mode: "no-cors"
      // })
      // res = await res.json()
      // let { data } = await axios.get("http://localhost:3000/data/", {
      //   mode: "no-cors",
      //   // port: 3000,
      //   // protocol: "http",
      //   // port: 3000,
      //   headers: {
      //     // "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      // });
      // console.log(data);
      
      let response = await fetch("http://localhost:3000/data/conditioned-apartment?limit=1&offset=0&desc=a", {
        method: 'get',
       
      })
      // response = await response.json()
      console.log(response)
      response = await response.json()
      console.log(response)
      // console.log(response.data)
    }

    fetchData();
  }, [URL]);

  const toggleSelection = (id) => {
    console.log(id);
    setHotels((prevHotels) =>
      prevHotels.map((hotel) =>
        hotel.id === id ? { ...hotel, selected: !hotel.selected } : hotel
      )
    );
  };

  return (
    <>
      <Header />
      <main className="container main">
        <Hotels hotels={hotels} toggleSelection={toggleSelection} />
        <MapSection hotels={hotels} />
      </main>
    </>
  );
}

export default App;
