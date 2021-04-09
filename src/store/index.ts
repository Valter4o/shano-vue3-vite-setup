import { createStore, StoreOptions } from "vuex";
import module from "./modules/module";
import { IStore } from "../shared/interfaces";

const store: StoreOptions<IStore> = {
  modules: {
    module,
  },
};
export default createStore(store);
