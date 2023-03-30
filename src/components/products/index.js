import { useEffect } from "../../utils/lib";
import productServices from "../../services/product";
import Card from "./card/./Card";
import Spinner from "../common/spinner/Spinner";
import { useProductReducer } from "../../states/products";

function ProductList() {
  const [state, dispatch] = useProductReducer();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productServices.getAll("/products");
        dispatch({ type: "SET_DATA", payload: response.data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  });

  if (state.products.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="product_grid_container">
      {state.products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
