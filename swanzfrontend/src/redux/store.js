import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productListReducer, {
  productDetailsReducer,
  productCategoryReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  categoryListReducer,
  productCreateReviewReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userPasswordResetReducer,
  userPasswordResetConfirmReducer,
  userActivationReducer,
  googleAuthenticateReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer,
} from "./reducers/orderReducers";

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCategoryList: productCategoryReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  googleAuthenticate: googleAuthenticateReducer,
  userActivation: userActivationReducer,
  userPasswordReset: userPasswordResetReducer,
  userPasswordResetConfirm: userPasswordResetConfirmReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  categoryList: categoryListReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
  productCreateReview: productCreateReviewReducer,
};
const cartitemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};
const preloadedState = {
  cart: {
    cartItems: cartitemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
