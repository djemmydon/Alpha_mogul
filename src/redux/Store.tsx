import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { userBookingsTableReducer } from "./user/Reducers/tables/bookingTableReducers";
import { userOrdersTableReducer } from "./user/Reducers/tables/ordersTableReducers";
import { itemsReducer} from "./user/Reducers/itemsTableReducers";
import { cartkeyReducer } from "./user/Reducers/cartKeyReducer";
import { userCartsTableReducer } from "./user/Reducers/tables/cartsTableReducer";
import { userReservationsTableReducer } from "./user/Reducers/tables/reservationTableReducers";
import { userItemsTableReducer} from "./user/Reducers/tables/orderItemsReducer";
import storage from "redux-persist/lib/storage";

 
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const allReducers = combineReducers({
  itemsReducer,
  cartkeyReducer,
  userCartsTableReducer,
  userBookingsTableReducer,
  userOrdersTableReducer,
  userReservationsTableReducer,
  userItemsTableReducer,

});
// The store now has the ability to accept thunk functions in `dispatch`
const config = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(config, allReducers);
const store = createStore(persistedReducer, composedEnhancer);
export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store
