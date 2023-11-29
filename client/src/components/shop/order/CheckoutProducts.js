import React, { Fragment, useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../layout";
import { subTotal, quantity, totalCost } from "../partials/Mixins";

import './App.css';
import { cartListProduct } from "../partials/FetchApi";
import { getBrainTreeToken, getPaymentProcess } from "./FetchApi";
import { fetchData, fetchbrainTree, pay } from "./Action";

// import DropIn from "braintree-web-drop-in-react";

const apiURL = process.env.REACT_APP_API_URL;

export const CheckoutComponent = (props) => {
  const history = useHistory();
  const { data, dispatch } = useContext(LayoutContext);

  const [state, setState] = useState({
    address: "",
    phone: "",
    transactionId: "",
    payment: "",
    error: false,
    success: false,
    clientToken: null,
    instance: {},
  });


   useEffect(() => {
    fetchData(cartListProduct, dispatch);
    fetchbrainTree(getBrainTreeToken, setState);

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
           className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
             strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
         </svg>
        Please wait untill finish
      </div>
    );
  }
  return (
    <Fragment>
      <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
        <div className="text-2xl mx-2">Order</div>
        {/* Product List */}
        <div className="flex flex-col md:flex md:space-x-2 md:flex-row">
          <div className="md:w-1/2">
            <CheckoutProducts products={data.cartProduct} />


            <div className="App">
            <table><br></br>
                <tr>
                    <th>Min. Weight in (Gram)</th>
                    <th></th>
                    <th>Max. Weight in (Gram)</th>
                    <th></th>
                    <th>Price in (Rs)</th>
                </tr>
                <tr>
    <td>0 </td><td>-</td>
    <td>500  </td><td>=</td>
    <td>190 </td>
  </tr>
  <tr>
    <td>501 </td><td>-</td>
    <td>1000  </td><td>=</td>
    <td>240 </td>
  </tr>
  <tr>
    <td>1001 </td><td>-</td>
    <td>1500  </td><td>=</td>
    <td>270 </td>
  </tr>
  <tr>
    <td>1501 </td><td>-</td>
    <td>2000 </td><td>=</td>
    <td>295 </td>
  </tr>
  <tr>
    <td>2001 </td><td>-</td>
    <td>2500 </td><td>=</td>
    <td>340</td>
  </tr>
  <tr>
    <td>2501 </td><td>-</td>
    <td>3000 </td><td>=</td>
    <td>390 </td>
  </tr>
  <tr>
    <td>3001 </td><td>-</td>
    <td>3500  </td><td>=</td>
    <td>490 </td>
  </tr>
  <tr>
    <td>3501 </td><td>-</td>
    <td>4000  </td><td>=</td>
    <td>540</td>
  </tr>
  <tr>
    <td>4001</td><td>-</td>
    <td>4500  </td><td>=</td>
    <td>640 </td>
  </tr>
  <tr>
    <td>4501</td><td>-</td>
    <td>5000  </td><td>=</td>
    <td>690 </td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
 <tr>
    <td>9501</td><td>-</td>
    <td>10000  </td><td>=</td>
    <td>1440 </td>
  </tr><br></br>
            </table><br></br>
        </div>
        <br></br>
          </div>

          
          <div className="w-full order-first md:order-last md:w-1/2">
            
            {state.clientToken !== null ? (
              <Fragment>
                <div
                  onBlur={(e) => setState({ ...state, error: false })}
                  className="p-4 md:p-8"
                >
                  {state.error ? (
                    <div className="bg-red-200 py-2 px-4 rounded">
                      {state.error}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col py-2">
                    <label htmlFor="address" className="pb-2">
                      Dalivery Address
                    </label>
                    <input
                      value={state.address}
                      onChange={(e) =>
                        setState({
                          ...state,
                          address: e.target.value,
                          error: false,
                        })
                      }
                      type="text"
                      id="address"
                      className="border px-4 py-2"
                      placeholder="Address..."
                    />
                  </div>
                  <div className="flex flex-col py-2 mb-2">
                    <label htmlFor="phone" className="pb-2">
                      Phone
                    </label>
                    <input
                      value={state.phone}
                      onChange={(e) =>
                        setState({
                          ...state,
                          phone: e.target.value,
                          error: false,
                        })
                      }
                      type="number"
                      id="phone"
                      className="border px-4 py-2"
                      placeholder="+92"
                    />
                  </div>




                  <label htmlFor="payment" className="pb-2">
                    Select Payment Method
                  </label>

                  <div className="flex flex-col py-2 mb-2">
                    <div>
                      <input
                        type="radio"
                        id="Cash on Delivery"
                        name="payment"
                        value="Cash on Delivery"
                        checked={state.payment === "Cash on Delivery"}
                        onChange={(e) =>
                          setState({
                            ...state,
                            payment: e.target.value,
                            error: false,
                          })
                        }
                      />
                      <label htmlFor="Cash on Delivery" className="ml-2">
                        Cash on Delivery
                      </label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="transaction"
                        name="payment"
                        value="transaction"
                        checked={state.payment === "transaction"}
                        onChange={(e) =>
                          setState({
                            ...state,
                            payment: e.target.value,
                            error: false,
                          })
                        }
                      />
                      <label htmlFor="transaction" className="ml-2">
                        Online Payment
                      </label>
                    </div>

                    {state.payment === "transaction" && (
                      <div className="flex flex-col py-2 mb-2">
                        <label htmlFor="transactionId" className="pb-2">
                         Transaction ID(EasyPaisa Or Any)
                        </label>
                        <label >
                          Account Name : Amir Sohail  (Priority 01)
                        </label>
                        <label >
                        Account No    : 03189146592
                        </label>
                        <label >
                          Account Name : Danish Ahsan Khan   (Priority 02)
                        </label>
                        <label >
                          Account No    : 03457112012
                        </label>
                        <br></br>
                        <input
                          value={state.transactionId}
                          onChange={(e) =>
                            setState({
                              ...state,
                              transactionId: e.target.value,
                              error: false,
                            })
                          }
                          type="text"
                          id="transactionId"
                          className="border px-4 py-2"
                          placeholder="Enter Transaction ID EasyPaisa Like ID # 21026698111"
                        />
                      </div>
                    )}
                  </div>


                  <div
                    onClick={(e) =>
                      pay(
                        data,
                        dispatch,
                        state,
                        setState,
                        getPaymentProcess,
                        totalCost,
                        history
                      )
                    }
                    className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
                    style={{ background: "#303031" }}
                  >
                    Pay now
                  </div>

                  <CustomerDisplay products={data.cartProduct} />
                  
                </div>
              </Fragment>
            ) : (
              <div className="flex items-center justify-center py-12">
                <svg
                  className="w-12 h-12 animate-spin text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const CheckoutProducts = ({ products }) => {
  const history = useHistory();

  return (
    <Fragment>
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products !== null && products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="col-span-1 m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 md:flex md:items-center md:justify-between"
              >
                <div className="md:flex md:items-center md:space-x-4">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                    alt="wishListproduct"
                  />
                  <div className="text-lg md:ml-6 truncate">
                    {product.pName}
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Price : {  product.pPrice - (product.pOffer) * product.pPrice * 0.01}.00{" "}  
                  </div>
                  <div className="md:ml-6 font-semibold text-gray-600 text-sm">
                    Quantitiy : {quantity(product._id)}
                  </div>
                  <div className="font-semibold text-gray-600 text-sm">
                    Total : {subTotal(product._id, product.pOffer, product.pPrice)}.00  PKR
                  </div>
                  <div className="font-semibold text-gray-600 text-sm">
                    Weight : {product.pWeight * quantity(product._id) } Gram
                  </div>
                </div>
              </div>
            );
          })
        ) : (
         <div> <div>No product found for checkout </div> <div>&nbsp;<br></br></div></div>
        )}
      </div>
    </Fragment>
  );
};

export const CustomerDisplay = ({ products }) => {
  const history = useHistory();

  
  function calculateweight  (weight) 
  {

    if( weight > 0 && weight<=500)
    {
      return 190;
    }
     else if(weight > 501 && weight<=1000)
    {
      return 240;
    }
    else if(weight > 1001 && weight<=1500)
    {
      return 270;
    }
    else if(weight > 1501 && weight<=2000)
    {
      return 295;
    }
    else if(weight > 2000 && weight<=2500)
    {
      return 340;
    }
    else if(weight > 2501 && weight<=3000)
    {
      return 390;
    }
    else if(weight > 3001 && weight<=3500)
    {
      return 490;
    }
    else if(weight > 3501 && weight<=4000)
    {
      return 540;
    }
    else if(weight > 4001 && weight<=4500)
    {
      return 640;
    }
    else if(weight > 4501 && weight<=5000)
    {
      return 690;
    }
    else if(weight > 5001 && weight<=5500)
    {
      return 790;
    }
    else if(weight > 5501 && weight<=6000)
    {
      return 860;
    }
    else if(weight > 6001 && weight<=6500)
    {
      return 940;
    }
    else if(weight > 6501 && weight<=7000)
    {
      return 990;
    }
    else if(weight > 7001 && weight<=7500)
    {
      return 1090;
    }
    else if(weight > 7501 && weight<=8000)
    {
      return 1190;
    }
    else if(weight > 8001 && weight<=8500)
    {
      return 1290;
    }
    else if(weight > 8501 && weight<=9000)
    {
      return 1340;
    }
    
    else  if(weight > 9001 && weight<=9500)
    {
      return 1390;
    }
    else if(weight > 9501 && weight<=10000)
    {
      return 1440;
    }
    
  

  }

  let totalPrice = 0;
  let totalWeight = 0;
  let totalBill = 0;

  products.forEach(element => {
    
 
      totalPrice +=  (element.pPrice - (element.pOffer) * element.pPrice * 0.01) *quantity(element._id) ;
     totalWeight+=element.pWeight * quantity(element._id);

     
    
     });

     

  return (
    <Fragment>
      <br></br>
      <b>Bill Summary</b>
      <div className="grid grid-cols-2 md:grid-cols-1">
        <br></br>
      Sub Total : {totalPrice } Rs /- <br></br>
      Total Weight Cost : {calculateweight(totalWeight)} Rs /- <br></br>
      Total Bill : {totalPrice + calculateweight(totalWeight)} Rs /-
      </div>
    </Fragment>
  );
};

export default CheckoutProducts;
