import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  //Ferch data and send to Sigle Component

  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
