import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  // user: userReducer,
  // cart: cartReducer,
  // products: productsReducer,
  // orders: ordersReducer,
  // reviews: reviewsReducer,
  // categories: categoriesReducer,
  // messages: messagesReducer,
  // loading: loadingReducer,
  // error: errorReducer,
  // search: searchReducer,
  // sort: sortReducer,
  // filter: filterReducer,
  // pagination: paginationReducer,
  // notifications: notificationsReducer,
  // modal: modalReducer,
  // sidebar: sidebar
});

export default rootReducer;
