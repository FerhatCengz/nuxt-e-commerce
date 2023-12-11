import Vuex from "vuex";
import ProductStore from "./admin/ProductStore";
import customerStore from "./customer/customerStore";
import basketStore from "./customer/basketStore";
import auth from "./admin/auth";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      ProductStore,
      customerStore,
      basketStore,
      auth,
    },
  });
};

export default createStore;
