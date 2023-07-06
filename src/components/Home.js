import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import Products from "./products/Products";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);

  return (
    <>
      {loading ? (
        "Loading...."
      ) : (
        <>
          <div className="container container-fluid">
            <h1>Products</h1>
            <section id="products" className="container mt-5">
              <div className="row">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {products &&
                    products.map((product) => (
                      <Products key={product.id} product={product} col={4} />
                    ))}
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
