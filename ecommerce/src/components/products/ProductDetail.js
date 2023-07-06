import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getProductDetail } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const alert = useAlert();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetail(id));
    if (error) {
      alert.error(error);
      dispatch(clearError);
    }
  }, [dispatch, error, alert, id]);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="container container-fluid">
            <div className="row d-flex ">
              <div className="col-6 col-lg-5 img-fluid mt-4 ">
                <img
                  src={product.image}
                  alt={product.title}
                  width="200px"
                  heigth="150px"
                />
              </div>
              <div className="col-6 col-lg-5 mt-5">
                <h3>{product?.title}</h3>
                <hr />
                <p>{product?.price}</p>
                <hr />
                <h4 className="mt-2">Description: </h4>
                <p>{product?.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
