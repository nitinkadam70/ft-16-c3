// reusable card component

import CartButton from "./CartButton";


const GroceryItem = (props) => {
  return (
    <>
     

        <div style={{border:'1px solid black'}}>

          <p style={{ textAlign: 'left', background:'black',borderRadius:'50%',padding:'3% 2%',width:'32px',color:'white' }}>{props.discount}</p>
          <img src={props.imgURL} alt={props.title} />
          <h4>{props.title}</h4>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

            <h4>{props.price}</h4>
            <p>M.R.P.{props.mrp}</p>
            <CartButton/>
          </div>
        
        </div>
      
    </>
  );
};
export default GroceryItem;
