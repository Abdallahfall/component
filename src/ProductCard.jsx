import Images from "./Image";
import Nom from "./Nom";
import Prix from "./Prix"
import Description from "./Description";

const ProductCard = () => (
    <div className="product-card">
      <Images/>
      <Nom/>
      <Prix/>
      <Description/>
    </div>
  );
export default ProductCard