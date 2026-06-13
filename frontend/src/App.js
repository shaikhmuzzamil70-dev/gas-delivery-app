import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import Banner from "./components/Banner";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/apartments/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredData =
  filter === "all"
    ? data
    : data.filter(
        (item) =>
          item.property_type?.toLowerCase() === filter.toLowerCase()
      );
  return (
    <div className="app-wrapper">

      <Navbar setFilter={setFilter} />

      <Banner />

      {/* Property Cards */}
      <div className="container">
        {filteredData.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>📍 {item.location}</p>
            <p>💰 ₹{item.price}</p>
            <p>🏷️ {item.property_type}</p>

            <a
              href="https://wa.me/917666620238"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 WhatsApp Owner
            </a>
          </div>
        ))}
      </div>

      <Footer />

    </div>
  );
}

export default App;