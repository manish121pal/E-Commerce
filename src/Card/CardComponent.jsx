import React, { useState } from "react";
import shirt from "../assets/shirts.png";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { remove } from "../feature/cart/cartSlice";

const CardComponent = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  // const [price, setPrice] = useState(item.price);
  const increment = () => {
    setNumber(number + 1);
    // setPrice(price);
  };

  const decrement = () => {
    if (number == 0) {
      setNumber(0);
      setPrice(price);
    } else {
      setNumber(number - 1);
      // setPrice(price);
    }
  };
  const handelRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="add-box1">
        <div className="add-box1-img">
          <img src={item.image} alt="" />
        </div>

        <div className="add-box1-text">
          <div className="add-text-heading">
            <h3>{item.title}</h3>
          </div>

          <div className="add-quantity">
            <div>
              {" "}
              <h4>Qua </h4>{" "}
            </div>
            <div className="qua-btn">
              <button className="qua-btn1" onClick={() => increment()}>
                +
              </button>
              <h6>{number}</h6>
              <button className="qua-btn2" onClick={() => decrement()}>
                -
              </button>
            </div>
          </div>
          <div className="add-price">
            <div className="price-text">
              <h4>
                Price:{item.price * number}
                <FaRupeeSign />
              </h4>
            </div>
            <div className="add-price-btn">
              <button className="btn1" onClick={() => handelRemove(item.id)}>
                Remove now
              </button>
              <button className="btn2">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
