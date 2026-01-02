import React, { useContext, useEffect, useState } from "react";
import NewNav from "../components/NewNav";
import styles from "../CSS/collections.module.css";
import { toast } from "react-toastify";
import { Appcontext } from "../context/Appcontext";
import Showcollection from "../components/Showcollection";

const Collections = () => {
  const { productData, fetchProducts } = useContext(Appcontext);

  const [audio, setAudio] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [mobiles, setMobiles] = useState(false);
  const [laptops, setLaptops] = useState(false);
  const [wearables, setWearables] = useState(false);
  const [speakers, setSpeakers] = useState(false);

  const [minPrice, setMinprice] = useState("0");
  const [maxPrice, setMaxprice] = useState("10000");

  const [dummy, setDummy] = useState([]);

  useEffect(() => {
    if (productData.length === 0) {
      fetchProducts();
    } else {
      setDummy(productData);
    }
  }, [productData]);

  function handleClick(e) {
    e.preventDefault();

    if (minPrice === "" || maxPrice === "") {
      toast.error("Please enter both minimum and maximum price");
      return;
    }

    if (Number(minPrice) > Number(maxPrice)) {
      toast.error("Maximum price must be greater than minimum price");
      return;
    }

    let data = [];

    for (let i = 0; i < productData.length; i++) {
      let item = productData[i];
      let c = item.category;
      let flag = false;

      if (
        (c === "Audio" && !audio) ||
        (c === "Speakers" && !speakers) ||
        (c === "Wearables" && !wearables) ||
        (c === "Laptops" && !laptops) ||
        (c === "Mobiles" && !mobiles) ||
        (c === "Kitchen" && !kitchen)
      ) {
        flag = true;
      }

      if (item.price < Number(minPrice) || item.price > Number(maxPrice)) {
        flag = true;
      }

      if (!flag) data.push(item);
    }

    setDummy(data);
  }

  return (
    <div>
      <NewNav />

      <div className={styles.bigdiv}>
        <div className={styles.first}>
          <h3 className={styles.title}>FILTERS</h3>

          <h4 className={styles.subtitle}>CATEGORIES</h4>

          <label className={styles.checkbox}>
            <input type="checkbox" onChange={(e) => setAudio(e.target.checked)} />
            <span>Audio</span>
          </label>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setSpeakers(e.target.checked)}
            />
            <span>Speakers</span>
          </label>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setLaptops(e.target.checked)}
            />
            <span>Laptops</span>
          </label>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setWearables(e.target.checked)}
            />
            <span>Wearables</span>
          </label>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setMobiles(e.target.checked)}
            />
            <span>Mobiles</span>
          </label>

          <label className={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setKitchen(e.target.checked)}
            />
            <span>Kitchen</span>
          </label>

          <h4 className={styles.subtitle}>PRICE</h4>

          <div className={styles.priceBox}>
            <div>Min-Price</div>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinprice(e.target.value)}
            />
            <div>Max-Price</div>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxprice(e.target.value)}
            />
          </div>

          <button className={styles.applyBtn} onClick={handleClick}>
            Apply Filters
          </button>
        </div>

        <div className={styles.second}>
          <Showcollection data={dummy} />
        </div>
      </div>
    </div>
  );
};

export default Collections;
