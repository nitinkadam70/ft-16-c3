
// keep the add to cart component here
import { useState } from "react";
const CartButton = () => {
  //manage state of the count 

  const [count, setCount] = useState(1);
  const [showCounter, setShowCounter] = useState(true);


  const handelInc = () => {
    setCount(count + 1)
  }

  const handleDec = () => {
    setCount(count - 1)
  }

  return (
    <>
      {/* add to cart button */}
      {/* count with - and  + button */}

      <div>
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Add to Cart" : "Remove"}</button>
        {showCounter &&
          <div>
            <button onClick={handleDec}>-</button>
            <p className="count-item">{count}</p>
            <button onClick={handelInc}>+</button>
          </div>}
      </div>

    </>
  );
};
export default CartButton
