import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";
import Loading from "../components/Loading";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";
import styles from "../CSS/productdetail.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const { backendUrl,productData, fetchProducts,cartData,getcartdata } = useContext(Appcontext);
  const [add,setAdd]=useState(false);
  const [product, setProduct] = useState(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (productData.length === 0) {
      fetchProducts();
    } else {
      const found = productData.find(p => p._id === id);
      setProduct(found);
    }
  }, [productData, id]);

  if (!product) return <Loading status="Fetching data" />;

  const size = product.image.length;

  const handleFront = () => setIdx((idx + 1) % size);
  const handleBack = () => setIdx((idx - 1 + size) % size);

  const calcOriginalPrice = (price, discount) =>
    Math.floor((100 * price) / (100 - discount));

  async function handleClick()
  {
    let flag=false;
    for(let i=0;i<cartData.length;i++)
    {
      if(cartData[i].productId===id)
      {
        toast.info("Item already in the cart");
        return;
      }
    }
     try{
        setAdd(true);
        axios.defaults.withCredentials=true;
        const {data}=await axios.post(backendUrl+"/api/product/addtocart",{productId:id,qty:1});
        if(data.success)
        {
           setAdd(false);
           getcartdata();
          toast.success(data.message);
        }
        else{
          setAdd(false);
          toast.error(data.message);
        }
     }catch(err)
     {
      setAdd(false);
        toast.error(err.message);
     }
  }

  return (
    <div>
      {add ? <Loading status={"Adding to cart"}/> : null}
      <NewNav />

      <div className={styles.container}>
        {/* Image Section */}
        <div className={styles.first}>
          <div className={styles.arrow} onClick={handleBack}>
            &lt;
          </div>

          <div className={styles.imageWrapper}>
            <img src={product.image[idx]} alt={product.name} />
          </div>

          <div className={styles.arrow} onClick={handleFront}>
            &gt;
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.second}>
          <h1 className={styles.title}>{product.name}</h1>

          <div className={styles.priceBox}>
            <span className={styles.discountedPrice}>
              ₹{product.price}
            </span>

            <span className={styles.originalPrice}>
              ₹{calcOriginalPrice(product.price, product.discount)}
            </span>

            <span className={styles.discount}>
              {product.discount}% OFF
            </span>
          </div>

          <h3 className={styles.featureTitle}>Product Features</h3>
          <p className={styles.description}>{product.description}</p>

          <button disabled={add} className={styles.cartBtn} onClick={handleClick}>ADD TO CART</button>

          <div className={styles.extraInfo}>
            <p>✔ 100% Original product</p>
            <p>✔ Cash on delivery available</p>
            <p>✔ Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
