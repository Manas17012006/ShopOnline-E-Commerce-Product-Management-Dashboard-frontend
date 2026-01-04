import React from "react";
import NewNav from "../components/NewNav";
import { NavLink } from "react-router-dom";
import styles from "../CSS/adminadd.module.css";
import { useState } from "react";
import axios from "axios";
import api from "../utilities/axios";
import { useContext } from "react";
import { Appcontext } from "../context/Appcontext";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
const Adminadd = () => {
  const { backendUrl,fetchProducts } = useContext(Appcontext);

  const [checked, setChecked] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Audio");
  const [discount, setDiscount] = useState("");
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

    const [isdone,setDone]=useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("name", name.trim());
      fd.append("description", description.trim());
      fd.append("price", price.trim());
      fd.append("category", category);
      fd.append("discount", discount.trim());
      fd.append("bestseller", checked);

      image1 && fd.append("image1", image1);
      image2 && fd.append("image2", image2);
      image3 && fd.append("image3", image3);
      image4 && fd.append("image4", image4);
      console.log(fd);
      toast.success("Adding product");
        setDone(true);
      const {data}= await api.post(backendUrl + "/api/product/add", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.success) {
        toast.success("Added successfully");
        fetchProducts();
        setDone(false);
      } else {
        toast.error(data.message);
        setDone(false);
      }
    } catch (err) {
      toast.error(err.message);
      setDone(false);
    }
  }

  return (
    <div>
        {isdone ? <Loading status={"Adding"}/> : null}
      <NewNav />
      <div className={styles.bigdiv}>
        <div className={styles.first}>
          <NavLink
            to="/admin-panel/list"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
            }
          >
            All items
          </NavLink>

          <NavLink
            to="/admin-panel/add"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
            }
          >
            Add Items
          </NavLink>

          <NavLink
            to="/admin-panel/order"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
            }
          >
            Orders
          </NavLink>

          <NavLink
            to="/admin-panel/recruit"
            className={({ isActive }) =>
              isActive ? `${styles.list} ${styles.active}` : `${styles.list}`
            }
          >
            Recruit Admins
          </NavLink>
        </div>

        <div className={styles.second}>
          <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <label>Upload Image</label>
            <div className={styles.images}>
              <input
                type="file"
                id="image1"
                onChange={(e) => setImage1(e.target.files[0])}
              />
              <input
                type="file"
                id="image2"
                onChange={(e) => setImage2(e.target.files[0])}
              />
              <input
                type="file"
                id="image3"
                onChange={(e) => setImage3(e.target.files[0])}
              />
              <input
                type="file"
                id="image4"
                onChange={(e) => setImage4(e.target.files[0])}
              />
            </div>

            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product's Name"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label>Product Description</label>
            <textarea
              rows="5"
              placeholder="Write description here"
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Category</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="Audio">Audio</option>
              <option value="Speakers">Speakers</option>
              <option value="Laptops">Laptops</option>
              <option value="Wearables">Wearables</option>
              <option value="Kitchen">Kitchen Appliances</option>
              <option value="Mobiles">Mobiles</option>
            </select>

            <label>Discount</label>
            <input type="text" placeholder="Product discount" required onChange={(e)=>setDiscount(e.target.value)}/>

            <label>Product Price</label>
            <input
              type="text"
              placeholder="10"
              required
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Add to Bestseller</span>
            </div>

            <button type="submit" disabled={isdone}>Add Product</button>
          </form>
        </div>

        {/* <Outlet/> */}
      </div>
    </div>
  );
};

export default Adminadd;
